import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main-app.scss';
import Layout from './layouts/Layout';
import { navMenu, articleInfo } from './data';
import NavMenus from './components/navigations/NavMenus';
import NavButton from './components/navigations/NavButton';
import Article from './section/Article';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <NavButton />
      <Article data={articleInfo} />
    </Layout>
    <NavMenus 
      menus={navMenu}
    />
  </React.StrictMode>
);
