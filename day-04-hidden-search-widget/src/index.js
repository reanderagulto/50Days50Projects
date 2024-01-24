import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main-app.scss';
import Layout from './layouts/Layout';
import SearchWidget from './components/SearchWidget';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <SearchWidget />
    </Layout>
  </React.StrictMode>
);
