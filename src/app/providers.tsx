'use client'

import '@/styles/globals.css'
import { SessionProvider as AuthProvider } from 'next-auth/react'
import NextNProgress from 'nextjs-progressbar'
import Error from 'next/error'
import { useState } from 'react'
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider
} from 'react-query'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  const dehydratedState = dehydrate(queryClient)
  // const session = await getServerSession(authOptions)

  // if (pageProps.error) {
  //   return (
  //     <Error
  //       statusCode={pageProps.error.statusCode}
  //       title={pageProps.error.message}
  //     />
  //   )
  // }

  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider session={session}> */}
      <section className="scroll-smooth bg-gradient-to-b from-purple_gradient_1 to-purple_gradient_2 w-[100vw] h-[100vh] flex flex-col overflow-scroll overflow-x-hidden">
        <NextNProgress
          transformCSS={(css) => {
            return <style>{css}</style>
          }}
        />
        <Hydrate state={dehydratedState}>{children}</Hydrate>
      </section>
      {/* </AuthProvider> */}
    </QueryClientProvider>
  )
}
