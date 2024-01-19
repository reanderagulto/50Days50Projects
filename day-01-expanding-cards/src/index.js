import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main-app.scss';
import Layout from './layouts/Layout';
import Cards from './components/Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Cards />
    </Layout>
  </React.StrictMode>
);
