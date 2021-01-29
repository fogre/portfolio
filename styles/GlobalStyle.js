import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: #1a2135;
    box-sizing: border-box;
    position: relative;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    scrollbar-width: none;

    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    line-height: 1;
    color: #ffffffff;
    text-shadow: -0.5px 0.5px 0 #1a2135,
      0.5px 0.5px 0 #1a2135,
      0.5px -0.5px 0 #1a2135,
      -0.5px -0.5px 0 #1a2135;
  }

  p {
    font-size: 1.35em;
  }

  h2 {
    font-size: min(2.6em, 9vw);
    margin: 0;
    padding-left: min(2vw, 27px);
    border-width: 1px;
    border-left-style: solid;
    border-image: linear-gradient(
        rgba(0, 0, 0, 0),
        ${props => props.border}
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
