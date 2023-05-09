import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/global'
import { defaultTheme } from './style/themes/default'

import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'
import { UserProvider } from './contexts/UserContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserProvider>
        <BrowserRouter>
          <Router />
          <ToastContainer
            autoClose={3000}
            pauseOnHover={false}
            style={{ width: 'max-content' }}
          />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  )
}
