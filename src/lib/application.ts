import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { validate } from "@/middleware/validate";
import { applicationSchema } from "@/schemas/application";
import { tsOptions, openDate, closeDate } from "@/lib/data/dates";
import { prisma } from "db";

async function handleApplication(
  data: any,
  request: NextRequest
): Promise<NextResponse> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  if (!data.agree) {
    return NextResponse.json(
      { message: "Must agree before submit" },
      { status: 403 }
    );
  }

  const now = new Date().toLocaleString("en-US", tsOptions);
  const applicationOpen = now >= openDate && now <= closeDate;

  if (
    !applicationOpen &&
    process.env.NEXT_PUBLIC_TEST_APPS?.toLowerCase() !== "true"
  ) {
    return NextResponse.json(
      { message: "Applications are not open at this time." },
      { status: 403 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email as string },
    include: {
      application: true
    }
  });

  if (user?.application?.applied) {
    return NextResponse.json(
      { message: "You've already submitted an application!" },
      { status: 403 }
    );
  }

  let applicationData = {
    name: data.name,
    email: data.email,
    preferredEmail: data.preferredEmail,
    school: data.school,
    major: data.major,
    food: data.food,
    class: data.gradYear,
    phone: data.phone,
    github: data.github,
    degree: data.education,
    pronouns: data.pronouns,
    skillLevel: data.skill,
    response: data.response,
    userId: user?.id as any,
    applied: true,
    requirement: true
  };

  if (data.email !== "") {
    // @ts-ignore: ignore email type error
    applicationData.email = data.email;
  }
  await prisma.application.create({
    data: applicationData
  });

  return NextResponse.json(data, { status: 200 });
}

export const handleAppRoute = validate(applicationSchema, handleApplication);
