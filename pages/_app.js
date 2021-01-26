import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #1a2135;
    color: #ffffffff;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    line-height: 1;
    scrollbar-width: none;
    text-shadow: -0.5px 0.5px 0 #1a2135,
      0.5px 0.5px 0 #1a2135,
      0.5px -0.5px 0 #1a2135,
      -0.5px -0.5px 0 #1a2135;
  }

  p {
    font-size: 1.36em;
    font-weight: 300;
    color: white;
  }

  h2 {
    font-size: min(2.6em, 9vw);
    margin: 0;
    padding-left: min(2vw, 27px);
    border-width: 1px;
    border-left-style: solid;
    border-image: linear-gradient(
        rgba(0, 0, 0, 0),
        ${props => props.theme.border}
      ) 1;
  }

  h3 {
    font-size: min(1.5em, 6.5vw);
    margin-bottom: 0em;
  }

  h4 {
    font-size: 1.35em;
    margin: 1em 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`
const theme = {
  border: '#363636',
  grey: '#b3b3b3',
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
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>  
    </>
  )
}