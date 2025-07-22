import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/server/middleware/db/mongoose";
import User from "@/server/models/User";
import bcryptjs from "bcryptjs";

export async function POST(req: NextRequest) {
  await connectToDatabase();
  try {
    const { username, email, password } = await req.json();

    // Validate Input
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return NextResponse.json(
        { error: "Username can only contain letters and numbers" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = User.create({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
