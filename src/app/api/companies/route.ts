import { NextResponse } from 'next/server'
import { companies } from './companies'

export async function GET() {
  return NextResponse.json(companies)
}
