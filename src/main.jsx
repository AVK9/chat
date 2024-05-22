import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
// import { GlobalStyles } from '../GlobalStyles';
import App from './App';
import { auth, firestore } from './services/firebase';
import firebase from 'firebase/compat/app';
import { BrowserRouter } from 'react-router-dom';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter
    // basename="/chat_fb"
    >
      <Context.Provider
        value={{
          firebase,
          auth,
          firestore,
        }}
      >
        {/* <Global styles={GlobalStyles} /> */}
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
