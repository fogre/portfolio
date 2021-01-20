import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #1a2135;
    color: white;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    line-height: 1;
    scrollbar-width: none;
    text-shadow: -0.5px 0.5px 0 #1A2735,
      0.5px 0.5px 0 #1A2735,
      0.5px -0.5px 0 #1A2735,
      -0.5px -0.5px 0 #1A2735;
  }

  p {
    font-size: 1.32em;
    color: white;
  }

  h1 {
    font-size: min(4.5em, 10vw);
    margin: 0 0 0.2em;
  }

  h2 {
    font-size: min(2.4em, 6vw);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 0em;
  }

  h4 {
    font-size: 1.3em;
    margin: 1em 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`
const theme = {
  border: '#424242',
  grey: '#a1a1a1',
  gradients: [
    'linear-gradient(107deg, rgba(49,63,166,1) 0%, rgba(162,121,201,1) 100%)',
    'linear-gradient(107deg, rgba(162,121,201,1) 0%, rgba(71,32,138,1) 100%)',
    'linear-gradient(107deg, rgba(105,32,138,1) 0%, rgba(101,115,215,1) 100%)'
  ]
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