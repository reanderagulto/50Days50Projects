import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main-app.scss';
import Layout from './layouts/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
