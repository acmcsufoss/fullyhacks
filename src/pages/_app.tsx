import '@/styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Session } from 'next-auth'
import { SessionProvider as AuthProvider } from 'next-auth/react'
import NextNProgress from 'nextjs-progressbar'
import Error from 'next/error'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

export default function App({
  Component,
  pageProps
}: AppProps<{ session: Session }>) {
  const [queryClient] = useState(() => new QueryClient())
  const router = useRouter()
  useEffect(() => {
    function handleRouteChange(route: string) {
      // Force page reload when user navigates to `/`.
      if (route === '/') {
        router.reload()
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])

  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider session={pageProps.session}>
        <section className="scroll-smooth bg-gradient-to-b from-purple_gradient_1 to-purple_gradient_2 w-[100vw] h-[100vh] flex flex-col overflow-scroll overflow-x-hidden">
          <NextNProgress
            transformCSS={(css) => {
              return <style>{css}</style>
            }}
          />
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </section>
      </AuthProvider>
    </QueryClientProvider>
  )
}
