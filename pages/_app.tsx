import '../styles/globals.css'
import Script from 'next/script'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.0/umd/react.production.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.0/umd/react-dom.production.min.js" strategy="beforeInteractive" />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp
