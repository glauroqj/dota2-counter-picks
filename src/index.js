import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
/** theme */
import { ThemeProvider } from 'styled-components'
import { ThemeStyledComponents } from './assets/style/theme'
import GlobalStyle from './assets/style/global'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ ThemeStyledComponents }>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
