import GlobalStyle from '@/styles/GlobalStyle'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import hybrid from '@/styles/themes/hybrid'
import AboutModalProvider from '@/context/AboutModal'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&family=Teko:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </Head>
    
      <ThemeProvider theme={hybrid}>
        <AboutModalProvider>
          <Component {...pageProps} />
        </AboutModalProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
