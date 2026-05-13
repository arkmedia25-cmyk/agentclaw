import { NextRequest, NextResponse } from 'next/server'
import { subscribe } from '@/lib/emailService'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, name, source, keyword, magnet } = body

    if (!email || !source) {
      return NextResponse.json({ success: false, error: 'Email and source are required' }, { status: 400 })
    }

    const result = await subscribe({ email, name, source, keyword, magnet })

    if (!result.success) {
      return NextResponse.json(result, { status: 500 })
    }

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}
