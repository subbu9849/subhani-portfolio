import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Contact from "@/models/Contact";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    await connectDB();

    const contact = await Contact.create(body);

    return NextResponse.json({
      success: true,
      contact,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );

  }

}