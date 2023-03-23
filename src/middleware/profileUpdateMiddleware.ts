import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

export const rateLimitMiddleware = (
  handler: NextApiHandler
): NextApiHandler => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    // Get the last update time of the user from the cookie
    const cookies = cookie.parse(req.headers.cookie ?? '')
    const lastUpdateTime = cookies.lastUpdateTime

    if (lastUpdateTime) {
      // Calculate the time since the last update
      const pastTime = Date.parse(lastUpdateTime)
      const timeSinceLastUpdate = Date.now() - pastTime
      // Set the time limit (in milliseconds)
      const timeLimit = 24 * 60 * 60 * 1000 // 24 hours
      // Check if the time limit has been exceeded
      if (timeSinceLastUpdate < timeLimit) {
        return res.status(429).json({
          message: 'You can only update your profile once every 24 hours.'
        })
      }
    } else {
      console.log('No last update time found')
    }

    // Update the cookie with the current time
    const currentUpdateTime = new Date().toISOString()
    const newCookies = cookie.serialize('lastUpdateTime', currentUpdateTime, {
      maxAge: 30 * 24 * 60 * 60, // Set the cookie expiration time to 30 days
      path: '/'
    })
    res.setHeader('Set-Cookie', newCookies)

    // Call the original handler
    return handler(req, res)
  }
}
