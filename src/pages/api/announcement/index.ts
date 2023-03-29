import { prisma } from 'db'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only authorized user able to post announcement
  const session = await getSession({ req })
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized.' })
  }
  // Post announcement
  if (req.method === 'POST') {
    // Retrieve current user
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email as any }
    })
    //only admin able to post announcement
    if (!user?.isAdmin) {
      return res.status(403).json({ message: 'Must be admin to post!' })
    }
    try {
      const { title, content } = req.body
      // post
      await prisma.announcement.create({
        data: {
          title: title,
          content: content,
          userId: user?.id as any
        }
      })
      res.status(200).json(req.body)
    } catch (e) {
      res.status(500).json(e)
    }
  } else if (req.method === 'GET') {
    try {
      // get all announcements
      const announcements = await prisma.announcement.findMany()
      res.status(200).json(announcements)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['POST', 'GET'])
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` })
  }
}
