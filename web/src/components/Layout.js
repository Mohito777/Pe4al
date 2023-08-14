import React from 'react';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Search from './search/SearchModal';
import { SearchModalContextProvider } from '../contexts/searchModalContext';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Search />
      <Header />
      {children}
      <Footer />
    </SearchModalContextProvider>
  );
}

export default Layout;
