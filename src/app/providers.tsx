"use client";

import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import { useState } from "react";
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider
} from "react-query";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const dehydratedState = dehydrate(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <section className="flex h-[100vh] w-[100vw] flex-col overflow-scroll overflow-x-hidden scroll-smooth bg-gradient-to-b from-purple_gradient_1 to-purple_gradient_2">
          <NextNProgress
            transformCSS={(css) => {
              return <style>{css}</style>;
            }}
          />
          <Hydrate state={dehydratedState}>{children}</Hydrate>
        </section>
      </SessionProvider>
    </QueryClientProvider>
  );
}
