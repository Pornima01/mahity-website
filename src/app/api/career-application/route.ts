import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

interface CareerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  position: string;
  employmentStatus: string;
  resumeUrl?: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const country = formData.get("country") as string;
    const city = formData.get("city") as string;
    const position = formData.get("position") as string;
    const employmentStatus = formData.get("employmentStatus") as string;
    const resume = formData.get("resume") as File;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !country || !city || !position || !employmentStatus) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Get Google Script URL from environment
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL_CAREER;

    if (!googleScriptUrl) {
      console.error("GOOGLE_SCRIPT_URL_CAREER is not defined in environment variables");
      return NextResponse.json(
        { success: false, message: "Google Script URL is missing" },
        { status: 500 }
      );
    }

    // Create upload directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), "public", "uploads", "resumes");
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    // Save resume file and get URL
    let resumeUrl = "";
    if (resume) {
      try {
        const buffer = Buffer.from(await resume.arrayBuffer());
        const fileName = `${Date.now()}_${resume.name.replace(/\s+/g, "_")}`;
        const filePath = path.join(uploadsDir, fileName);
        await writeFile(filePath, buffer);
        
        // Create full URL for resume
        const protocol = request.headers.get("x-forwarded-proto") || "http";
        const host = request.headers.get("host");
        resumeUrl = `${protocol}://${host}/uploads/resumes/${fileName}`;
        
        console.log("Resume saved successfully:", resumeUrl);
      } catch (error) {
        console.error("Error saving resume:", error);
        // Continue even if resume save fails
      }
    }

    // Prepare data for Google Sheets
    const sheetData: CareerFormData = {
      firstName,
      lastName,
      email,
      phone,
      country,
      city,
      position,
      employmentStatus,
      resumeUrl,
    };

    console.log("Sending data to Google Sheets:", sheetData);

    // Send to Google Sheets
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheetData),
      redirect: "follow",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Sheets API error:", errorText);
      throw new Error(errorText || "Failed to save data to Google Sheet");
    }

    const responseText = await response.text();
    console.log("Google Sheets response:", responseText);

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error("Error parsing response:", e);
      console.log("Raw response:", responseText);
      // If parsing fails but request succeeded, treat as success
      if (response.ok) {
        result = { success: true };
      } else {
        throw new Error("Failed to parse Google Sheets response");
      }
    }

    if (result.error) {
      throw new Error(result.error || "Failed to save data to Google Sheet");
    }

    if (!result.success && result.success !== undefined) {
      throw new Error("Google Sheets reported failure");
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully and saved to Google Sheet!",
      data: {
        name: `${firstName} ${lastName}`,
        email,
        position,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while saving data to Google Sheet";

    console.error("Error processing application:", error);

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to check if the API is working
export async function GET() {
  const googleScriptConfigured = !!process.env.GOOGLE_SCRIPT_URL_CAREER;
  
  return NextResponse.json(
    {
      success: true,
      message: "Career Application API is running",
      googleScriptConfigured,
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}