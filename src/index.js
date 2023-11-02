import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import AnotherRandomUser from './AnotherRandomUser';
import BrowserRouterTest from './BrowserRouterTest';
import HashRouterTest from './HashRouterTest';
import RandomUser from './RandomUser';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <h1>Home</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<BrowserRouterTest />} />       
          <Route path="/random-user" element={<RandomUser />} />       
        </Routes>
      </BrowserRouter>
      <HashRouter>
        <Routes>
          <Route index element={<HashRouterTest />} />       
          <Route path="/another-random-user" element={<AnotherRandomUser />} />       
        </Routes>
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
