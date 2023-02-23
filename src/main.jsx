// import { UserContextProvider } from './components/Context/UserContext'
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <UserContextProvider>
      
    </UserContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
);
