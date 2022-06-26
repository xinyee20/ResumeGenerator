import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import './i18n/configs'

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#007bff',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
