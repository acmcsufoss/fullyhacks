import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

export function validate(schema: any, handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (['POST', 'PUT'].includes(req.method as string)) {
      try {
        req.body = await schema.validate(req.body, {
          strict: true,
          abortEarly: false
        })
      } catch (error) {
        return res.status(400).json(error)
      }
    }
    await handler(req, res)
  }
}
