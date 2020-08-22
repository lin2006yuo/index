import "../styles/globals.css"
import type { AppProps  } from "next/app"
import Head from "next/head"

import BasicLayout from "../layouts/basic_layout"

const Init: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hello Kev!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Init>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </Init>
  )
}

export default MyApp
