// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// interface ContactFormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   contactNumber?: string;
//   reason: string;
//   description: string;
// }

// export async function POST(req: NextRequest) {
//   try {
//     const data: ContactFormData = await req.json();

//     const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

//     if (!googleScriptUrl) {
//       return NextResponse.json(
//         { success: false, message: "Google Script URL is missing" },
//         { status: 500 }
//       );
//     }

//     const formData = new URLSearchParams();
//     formData.append("firstName", data.firstName);
//     formData.append("lastName", data.lastName);
//     formData.append("email", data.email);
//     formData.append("contactNumber", data.contactNumber || "Not provided");
//     formData.append("reason", data.reason);
//     formData.append("description", data.description);

//     const response = await fetch(googleScriptUrl, {
//       method: "POST",
//       body: formData,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(errorText || "Failed to save data to Google Sheet");
//     }

//     const result = await response.json();

//     if (result.error) {
//       throw new Error(result.error || "Failed to save data to Google Sheet");
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Form submitted successfully and saved to Google Sheet!",
//     });
//   } catch (error) {
//     const message =
//       error instanceof Error
//         ? error.message
//         : "An unknown error occurred while saving data to Google Sheet";

//     console.error("Error saving to Google Sheet:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message,
//       },
//       { status: 500 }
//     );
//   }
// }




import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber?: string;
  reason: string;
  description: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactFormData = await req.json();

    console.log("📝 Received form data:", data);

    
    if (!data.firstName || !data.lastName || !data.email || !data.reason || !data.description) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      console.error("❌ GOOGLE_SCRIPT_URL environment variable is not set");
      return NextResponse.json(
        { success: false, message: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    console.log("🚀 Sending to Google Apps Script...");

    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); 

    try {
     
      const response = await fetch(googleScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          contactNumber: data.contactNumber || "Not provided",
          reason: data.reason,
          description: data.description,
        }),
        signal: controller.signal,
        redirect: "follow", 
      });

      clearTimeout(timeoutId);

      console.log("📡 Google Apps Script response status:", response.status);

     
      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Google Apps Script error response:", errorText);
        throw new Error(`Google Apps Script returned status ${response.status}`);
      }

     
      const contentType = response.headers.get("content-type");
      let result;

      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        
        const text = await response.text();
        console.log("📄 Response text:", text);
        
       
        try {
          result = JSON.parse(text);
        } catch {
         
          if (response.ok) {
            result = { success: true };
          } else {
            throw new Error("Invalid response format from Google Apps Script");
          }
        }
      }

      console.log("✅ Google Apps Script result:", result);

      if (result.success) {
        return NextResponse.json({
          success: true,
          message: "Form submitted successfully!",
        });
      } else {
        throw new Error(result.message || result.error || "Failed to save data");
      }

    } catch (fetchError) {
      clearTimeout(timeoutId);

      if (fetchError instanceof Error && fetchError.name === "AbortError") {
        console.error("⏱️ Request timeout after 30 seconds");
        return NextResponse.json(
          {
            success: false,
            message: "The request is taking too long. Please check your Google Apps Script deployment or try again later.",
          },
          { status: 504 }
        );
      }

      throw fetchError;
    }

  } catch (error) {
    console.error("❌ Error in contact form submission:", error);

    const errorMessage = error instanceof Error 
      ? error.message 
      : "An error occurred while submitting the form. Please try again.";

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}