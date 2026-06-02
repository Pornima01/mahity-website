import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  serverTime: string;
};

export default function handler(
  _req: NextApiRequest, // Using underscore to indicate it's intentionally unused
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ serverTime: new Date().toISOString() });
}

// For App Router:
export async function GET() {
  return Response.json({ serverTime: new Date().toISOString() });
}