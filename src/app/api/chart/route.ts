import { NextResponse } from "next/server";
import chart from "@/lib/chart.json"
export const revalidate = 0;
export async function GET() {
    try {
      const bookData = chart;
      return NextResponse.json({ result: bookData, success: true });
    } catch (error) {
      return NextResponse.json({ result: "Error fetching data", success: false });
    }
  }