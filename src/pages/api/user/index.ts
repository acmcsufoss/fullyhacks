import { rateLimitMiddleware } from "@/middleware/profileUpdateMiddleware";
import { prisma } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only authorized user able to update their bio, discordId
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  // update bio, discordId
  if (req.method === "PUT") {
    let { bio, discordId } = req.body;
    try {
      // Retrieve current user
      const user = await prisma.user.findUnique({
        where: { email: session?.user?.email as any },
        include: {
          application: true
        }
      });
      if (user?.bio && bio == "") {
        bio = user?.bio;
      }
      if (user?.discordId && discordId == "") {
        discordId = user?.discordId;
      }
      if (!user?.application?.approved) {
        res.status(403).json({ message: "You're not approved!" });
      }
      const updatedUser = await prisma.user.update({
        where: { id: `${user?.id}` },
        data: {
          bio: bio,
          discordId: discordId
        }
      });
      res.status(200).json(updatedUser);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader("Allow", ["PUT"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
const rateLimitedUpdateProfileHandler = rateLimitMiddleware(handler);

export default rateLimitedUpdateProfileHandler;
