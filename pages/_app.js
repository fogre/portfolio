import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyle'

const theme = {
  border: '#363636',
  grey: '#b3b3b3',
  gradients: [
    'linear-gradient(107deg, rgba(49,63,166,1) 0%, rgba(162,121,201,1) 100%)',
    'linear-gradient(107deg, rgba(162,121,201,1) 0%, rgba(105,32,138,1) 100%)',
    'linear-gradient(107deg, rgba(105,32,138,1) 10%, rgba(101,115,215,1) 100%)'
  ]
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kotirantti - portfolio</title>
        <meta property="og:title" content="Kotirantti - Portfolio" />
        <meta property="twitter:title" content="Kotirantti - Portfolio" />
        <meta name="description" content="Antti Kotiranta / portfolio." />
        <meta property="og:description" content="Antti Kotiranta / portfolio." />
        <meta property="twitter:description" content="Antti Kotiranta / portfolio." />
        <meta property="og:type" content="website" />
        <meta property="author" content="fogre" />
        <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=0.9, minimum-scale=0.86" />
      </Head>
      <GlobalStyle border={theme.border} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}