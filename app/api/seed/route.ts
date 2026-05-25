import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Contact from "@/models/Contact";

export async function GET() {

  try {

    await connectDB();

    const contact = await Contact.create({

      name: "Shaik Subhani",

      email: "test@gmail.com",

      message: "MongoDB Working",

    });

    return NextResponse.json({
      success: true,
      data: contact,
    });

  } catch (error: any) {

    console.log(error);

    return NextResponse.json({
      success: false,
      error: error.message,
    });

  }

}