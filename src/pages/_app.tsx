import { useEffect, useCallback } from "react"
import type { AppProps } from "next/app"
import Head from "next/head"
import Router from "next/router"

import { useStores } from "../stores/index"

import BasicLayout from "../layouts/basic_layout"
import Loading from "../components/loading/index"

import "../styles/globals.css"
import { Observer } from "mobx-react"

const Start: React.FC = ({ children }) => {
  const { appStore } = useStores()

  useEffect(() => {
    registerRouterEvent()
  }, [])

  const registerRouterEvent = useCallback(() => {
    Router.events.on("routeChangeStart", () => {
      appStore.handleSetLoading(true)
    })
    Router.events.on("routeChangeComplete", () => {
      console.log('routeChangeComplete')
      appStore.handleSetLoading(false)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Hello Kev!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
      <Observer>{() => <Loading show={appStore.loading} />}</Observer>
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Start>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </Start>
  )
}

export default MyApp
