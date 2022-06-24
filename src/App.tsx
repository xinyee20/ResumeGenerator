import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './router/Router'

export const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)
