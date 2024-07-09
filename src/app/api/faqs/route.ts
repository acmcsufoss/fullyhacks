import { faqs } from './faqs'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(faqs)
}
