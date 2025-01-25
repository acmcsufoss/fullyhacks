import { NextRequest, NextResponse } from "next/server";
import { profileUpdateWithRateLimit } from "@/middleware/profileUpdateMiddleware";
import { handleProfileUpdate } from "@/lib/data/profile";

export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    const handleProfileRoute =
      await profileUpdateWithRateLimit(handleProfileUpdate);
    return await handleProfileRoute(data, req);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
