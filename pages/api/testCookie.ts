import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default function getCookie(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Check headers in network panel' })
}
