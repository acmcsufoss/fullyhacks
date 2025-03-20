import { prisma } from "db";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    // Retrieve current user
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email as string }
    });

    if (!user?.isAdmin) {
      return NextResponse.json(
        { message: "You're not the admin!" },
        { status: 403 }
      );
    }

    const data = await request.json();

    const { status } = data;

    if (typeof status !== "string") {
      return NextResponse.json({ message: "" }, { status: 400 });
    }

    const updatedApplication = await prisma.application.update({
      where: { id: params.id },
      data: {
        approved: status === "approve",
        rejected: status === "rejected",
        status: status ? "approved" : "rejected"
      }
    });

    return NextResponse.json(updatedApplication, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
