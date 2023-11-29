import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* https://github.com/flackr/scroll-timeline#readme */}
        <Script
          strategy="beforeInteractive"
          src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"
        />
      </body>
    </Html>
  )
}
