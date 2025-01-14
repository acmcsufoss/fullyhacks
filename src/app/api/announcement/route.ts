import { prisma } from "db";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email as string }
    });

    if (!user?.isAdmin) {
      return NextResponse.json(
        { message: "Must be admin to post!" },
        { status: 403 }
      );
    }

    const data = await request.json();
    const { title, content } = data;

    await prisma.announcement.create({
      data: {
        title,
        content,
        userId: user.id
      }
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  try {
    const announcements = await prisma.announcement.findMany();
    return NextResponse.json(announcements, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
