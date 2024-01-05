import { validate } from '@/middleware/validate'
import { applicationSchema } from '@/schemas/application'
import { prisma } from 'db'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only authorized user able submit application
  const session = await getSession({ req })
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized.' })
  }
  // Submit application
  if (req.method === 'POST') {
    try {
      const {
        name,
        email,
        pronouns,
        github,
        school,
        phone,
        major,
        gradYear,
        education,
        skill,
        response,
        food,
        agree
      } = req.body
      if (agree == false) {
        return res.status(403).json({ message: 'Must agree before submit' })
      }
      // Retrieve current user
      const user = await prisma.user.findUnique({
        where: { email: session?.user?.email as any },
        include: {
          application: true
        }
      })
      if (user?.application?.applied) {
        return res
          .status(403)
          .json({ message: "You've already submitted an application!" })
      }
      // submit
      await prisma.application.create({
        data: {
          name: name as any,
          email: email as any,
          school: school as any,
          major: major as any,
          food: food as any,
          class: gradYear as any,
          phone: phone as any,
          github: github as any,
          degree: education as any,
          pronouns: pronouns as any,
          skillLevel: skill as any,
          response: response as any,
          userId: user?.id as any,
          applied: true,
          requirement: true
        }
      })
      res.status(200).json(req.body)
    } catch (e) {
      res.status(500).json(e)
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['POST'])
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` })
  }
}

export default validate(applicationSchema, handler)
