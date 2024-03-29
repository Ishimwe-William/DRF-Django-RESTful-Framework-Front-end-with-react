import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
