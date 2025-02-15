import { NextRequest, NextResponse } from "next/server";
import { handleAppRoute } from "@/lib/application";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    return await handleAppRoute(data, req);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
