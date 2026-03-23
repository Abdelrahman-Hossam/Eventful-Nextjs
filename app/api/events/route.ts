import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model";
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    console.log("DB connected");
    const formData = await req.formData();
    let event;
    try {
      event = Object.fromEntries(formData.entries());
    } catch (e) {
      return NextResponse.json(
        { message: "Invalid JSON data" },
        { status: 400 },
      );
    }
    const createdEvent = await Event.create(event);
    return NextResponse.json(
      { message: "Created Successfully!", Event: event },
      { status: 201 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "Failed to create",
        error: e instanceof Error ? e.message : "unknown",
      },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectDB();
    const fetchedEvents = await Event.find().sort({ createdAt: -1 });
    return NextResponse.json({ fetchedEvents }, { status: 200 });
  } catch (error) {
    console.error("Not found!", error);
    return NextResponse.json({ message: "Failed to find" }, { status: 404 });
  }
}


