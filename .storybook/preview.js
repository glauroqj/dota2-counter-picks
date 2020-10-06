import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeStyledComponents } from '../src/assets/style/theme'
import GlobalStyle from '../src/assets/style/global'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={ThemeStyledComponents}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];