import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

