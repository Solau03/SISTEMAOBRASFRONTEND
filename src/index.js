import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from "./context/userContext"; 
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <UserProvider>
          <Login />
      </UserProvider>
  </BrowserRouter>
);