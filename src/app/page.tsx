import { NextResponse } from 'next/server'

export default function RootPage() {
  return NextResponse.redirect(new URL('/pt-BR/'))
}
