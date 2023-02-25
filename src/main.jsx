import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ThemeContextProvider } from './components/context/themeContext';
import { UserContextProvider } from './components/context/userContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
