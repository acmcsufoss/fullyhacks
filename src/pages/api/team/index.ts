import { NextApiRequest, NextApiResponse } from 'next'
import { team } from './team'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(team)
}
