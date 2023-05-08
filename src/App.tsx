import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/global'
import { defaultTheme } from './style/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>ola</h1>
      <p>akksoosososossosososososo</p>
      <p>akksoosososossosososososo</p>
    </ThemeProvider>
  )
}
