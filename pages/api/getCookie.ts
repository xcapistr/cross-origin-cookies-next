import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default function getCookie(
  req: NextApiRequest,
  res: NextApiResponse
) {
   res.setHeader(
     'Set-Cookie',
     serialize(
       'myCookie',
       JSON.stringify('This is the secret data in the cookie.'),
       { secure: true, httpOnly: true, maxAge: 5 * 60 * 1000, sameSite: 'none' },
     )
   )
  res.status(200).json({ message: 'OK' })
}