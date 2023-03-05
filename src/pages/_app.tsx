import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider as AuthProvider } from 'next-auth/react'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <>
      <AuthProvider session={session}>
        <section className="scroll-smooth bg-body_bg w-[100vw] h-[100vh] flex flex-col overflow-scroll overflow-x-hidden">
          <Component {...pageProps} />
        </section>
      </AuthProvider>
    </>
  )
}
