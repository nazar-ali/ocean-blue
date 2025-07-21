import { NextResponse } from "next/server";
import { connectToDatabase } from "@/server/middleware/db/mongoose";

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: "Database connection successful" });
  } catch (error) {
    return NextResponse.json(
      { message: "Database connection failed", error },
      { status: 500 }
    );
  }
}
