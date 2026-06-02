import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { JWT } from "google-auth-library";

const sheetId = process.env.GOOGLE_SHEET_ID as string;
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL as string;
const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(
  /\\n/g,
  "\n"
) as string;

// Setup Google Sheets API client
const sheets = google.sheets("v4");

const authenticateGoogle = async () => {
  const auth = new JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return auth;
};

const formatTimestamp = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
};

interface FormData {
  FirstName: string;
  LastName: string;
  EmailID: string;
  reason: string;
  Description: string;
}
// The function to insert data into Google Sheets
const insertIntoSheet = async (data: FormData) => {
  try {
    const auth = await authenticateGoogle();
    const timestamp = formatTimestamp(new Date());

    const request = {
      spreadsheetId: sheetId,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [
          [
            data.FirstName,
            data.LastName,
            data.EmailID,
            data.reason,
            data.Description,
            timestamp,
          ],
        ],
      },
      auth,
    };

    // Insert data into the sheet
    const response = await sheets.spreadsheets.values.append(request);

    // Check if the response has a tableRange
    const tableRange = response.data.tableRange || "No table range available";

    // Return the data with tableRange info
    return { tableRange };
  } catch (error) {
    console.error("Error inserting into Google Sheets:", error);
    throw new Error("Failed to insert data into Google Sheets");
  }
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    // Insert the data into the Google Sheets
    const response = await insertIntoSheet(formData);

    return NextResponse.json(
      {
        message: "Form submitted successfully!",
        data: response,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
