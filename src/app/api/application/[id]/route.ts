import { prisma } from "db";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { ApplicationUpdate, ApplicationStatus } from "@/types/interface";

const statusMapping = {
  [ApplicationUpdate.APPROVE]: {
    approved: true,
    rejected: false,
    waitlisted: false,
    status: ApplicationStatus.APPROVED
  },
  [ApplicationUpdate.REJECT]: {
    approved: false,
    rejected: true,
    waitlisted: false,
    status: ApplicationStatus.REJECTED
  },
  [ApplicationUpdate.WAITLIST]: {
    approved: false,
    rejected: false,
    waitlisted: true,
    status: ApplicationStatus.WAITLISTED
  }
};

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
        { message: "You're not a FullyHacks admin!" },
        { status: 403 }
      );
    }

    const data = await request.json();
    const { status } = data;

    if (!Object.values(ApplicationUpdate).includes(status)) {
      return NextResponse.json(
        { message: "Invalid status value!" },
        { status: 400 }
      );
    }

    const updatedApplication = await prisma.application.update({
      where: { id: params.id },
      data: statusMapping[status as ApplicationUpdate]
    });

    return NextResponse.json(updatedApplication, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
