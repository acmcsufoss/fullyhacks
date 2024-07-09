import { team } from './team'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(team)
}
