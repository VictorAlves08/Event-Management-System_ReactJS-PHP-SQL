import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyles } from './styles/globalStyle';

import { Home } from './pages/Home';

import {AuthProvider} from './context/auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
      <AuthProvider>
        <Home />
     </AuthProvider>
  </React.StrictMode>,
)
