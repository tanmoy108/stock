import { NextResponse } from "next/server";
import info from "@/lib/info.json"
export const revalidate = 0;
export async function GET() {
    try {
      const bookData = info;
      return NextResponse.json({ result: bookData, success: true });
    } catch (error) {
      return NextResponse.json({ result: "Error fetching data", success: false });
    }
  }