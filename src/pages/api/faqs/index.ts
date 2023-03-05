import { NextApiRequest, NextApiResponse } from 'next'
import { faqs } from './faqs'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(faqs)
}
