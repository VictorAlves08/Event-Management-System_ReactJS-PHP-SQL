import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyles } from './styles/globalStyle';

import { RouterApp } from '../src/routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterApp />
  </React.StrictMode>,
)
