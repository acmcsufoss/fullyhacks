import { NextRequest, NextResponse } from "next/server";

type RouteHandler = (data: any, req: NextRequest) => Promise<NextResponse>;

export async function profileUpdateWithRateLimit(handler: RouteHandler) {
  return async (data: any, req: NextRequest) => {
    const lastUpdateTime = req.cookies.get("lastUpdateTime")?.value;

    if (lastUpdateTime) {
      const pastTime = Date.parse(lastUpdateTime);
      const timeSinceLastUpdate = Date.now() - pastTime;
      const timeLimitMs = 60 * 60 * 1000; // 1 hour

      if (timeSinceLastUpdate < timeLimitMs) {
        return NextResponse.json(
          { message: "You can only update your profile once every 1 hour." },
          { status: 429 }
        );
      }
    }

    const res = await handler(data, req);

    // only set cookie if response is successful
    if (res.status === 200) {
      const currentUpdateTime = new Date().toISOString();
      res.cookies.set("lastUpdateTime", currentUpdateTime, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/"
      });
    }
    return res;
  };
}
