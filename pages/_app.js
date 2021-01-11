import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import img from '../public/noise3.png'

const GlobalStyle = createGlobalStyle`
  body {
    background: #1A2735;
    color: white;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    line-height: 1;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  p {
    font-weight: 300;
    font-size: 1.3em;
  }

  h1 {
    font-size: min(4.5em, 10vw);
    margin: 0 0 0.2em;
  }

  h2 {
    font-size: min(1.9em, 5vw);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 0em;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`
const theme = {
  colors: {
    primary: '#0070f3',
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}