import { NextResponse } from "next/server";

export async function GET() {
  const currentYear = new Date().getUTCFullYear();
  const userYear = new Date().getFullYear(); 

  if (userYear !== currentYear) {
    return NextResponse.json(
      { error: "Your system year is incorrect. Please update it to the current year." },
      { status: 400 }
    );
  }

  return NextResponse.json({ year: currentYear });
}
