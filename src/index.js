import React from 'react';
import ReactDOM from 'react-dom/client';  
import { Header } from './components/Header';
import { Banner } from './components/Banner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
  </React.StrictMode>
);

