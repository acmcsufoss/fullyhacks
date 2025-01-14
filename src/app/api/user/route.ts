import { prisma } from "db";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { profileUpdateWithRateLimit } from "@/middleware/profileUpdateMiddleware";

export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    const handleProfileRoute = await profileUpdateWithRateLimit(handleProfileUpdate);
    return await handleProfileRoute(data, req)
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export const handleProfileUpdate = async (data: any, req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    let { bio, discordId } = data;

    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email as string },
      include: {
        application: true
      }
    });

    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    if (!user.application?.approved) {
      return NextResponse.json(
        { message: "You're not approved!" },
        { status: 403 }
      );
    }

    if (user.bio && bio === "") {
      bio = user.bio;
    }
    if (user.discordId && discordId === "") {
      discordId = user.discordId;
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        bio,
        discordId
      }
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
