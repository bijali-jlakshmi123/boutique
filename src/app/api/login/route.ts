import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { email, password } = body

  // User requested credentials: samira@gmail.com / samira123
  if (email === 'samira@gmail.com' && password === 'samira123') {
    return NextResponse.json({ success: true, user: { name: 'Samira Admin', role: 'ADMIN' } })
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
}
