import { NextApiRequest, NextApiResponse } from 'next'
import { companies } from './companies'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(companies)
}
