import { authOptions } from "@/lib/auth";
import { prisma } from "db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const userEmail = session.user.email;
  const emailParam = req.nextUrl.searchParams.get("email");

  if (userEmail !== emailParam) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const application = await prisma.application.findFirst({
    where: { email: userEmail },
    select: { approved: true }
  });
  if (!application?.approved) {
    return new NextResponse("Application was not approved", { status: 403 });
  }

  const token = process.env.QRCODE_TOKEN;
  if (!token) {
    return new NextResponse("Token not present", { status: 400 });
  }
  const email = req.nextUrl.searchParams.get("email");
  if (!email) {
    return new NextResponse("Missing email", { status: 400 });
  }
  const targetUrl = `https://fullyhacksqr.acmcsuf.com/users/${email}/qr.png`;
  const imageRes = await fetch(targetUrl, {
    headers: {
      Cookie: `token=${token}`
    }
  });
  if (!imageRes.ok) {
    return new NextResponse("Failed to fetch image", {
      status: imageRes.status
    });
  }
  const imageBuffer = await imageRes.arrayBuffer();
  return new NextResponse(imageBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "no-store"
    }
  });
}
