import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next App - Boilerplate</title>
        <link rel="shortcut icon" href="/img/shortcut-icon.png" />
        <link rel="apple-touch-icon" href="/img/shortcut-icon.png" />
        <meta
          name="description"
          content="Boilerplate to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
