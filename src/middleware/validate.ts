import { NextRequest, NextResponse } from "next/server";

type RouteHandler = (data: any, request: NextRequest) => Promise<NextResponse>;

export function validate(schema: any, handler: RouteHandler) {
  return async (data: any, request: NextRequest): Promise<NextResponse> => {
    if (request.method === "POST" || request.method === "PUT") {
      try {
        const validatedData = await schema.validate(data, {
          strict: true,
          abortEarly: false
        });
        // Update data with validated values
        data = validatedData;
      } catch (error) {
        return NextResponse.json(error, { status: 400 });
      }
    }
    return await handler(data, request);
  };
}
