import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    font-family: 'Baloo Da 2', cursive;
    body {
      font-family: 'Baloo Da 2', cursive;
      margin: 0;
      padding: 0;
      background-color: #323232;
    }
    a {
      text-decoration: none;
      width: 100%;
      color: inherit;
    }
  }
`

export default GlobalStyle