import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { SessionProvider as AuthProvider } from 'next-auth/react'
import NextNProgress from 'nextjs-progressbar'

export default function App({
  Component,
  pageProps
}: AppProps<{ session: Session }>) {
  return (
    <>
      <AuthProvider session={pageProps.session}>
        <section className="scroll-smooth bg-body_bg w-[100vw] h-[100vh] flex flex-col overflow-scroll overflow-x-hidden">
          <NextNProgress
            transformCSS={(css) => {
              return <style>{css}</style>
            }}
          />
          <Component {...pageProps} />
        </section>
      </AuthProvider>
    </>
  )
}
