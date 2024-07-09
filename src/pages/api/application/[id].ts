import { prisma } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only authorized user able submit application
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  // update application
  if (req.method === "PUT") {
    try {
      const { approve } = req.body;
      // Retrieve current user
      const user = await prisma.user.findUnique({
        where: { email: session?.user?.email as any }
      });
      if (!user?.isAdmin) {
        res.status(403).json({ message: "You're not the admin!" });
      }
      const { id } = req.query;
      const updatedApplication = await prisma.application.update({
        where: { id: `${id}` },
        data: {
          approved: approve,
          rejected: !approve,
          status: approve ? "approved" : "rejected"
        }
      });
      res.status(200).json(updatedApplication);
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
