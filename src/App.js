import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';       // Navigation bar
import Home from './components/Home';           // Landing page
import CoinTable from './components/CoinTable'; // Crypto list page
import CoinPage from './components/CoinPage';   // Coin detail + chart page
import Portfolio from './components/Portfolio'; // User's portfolio
import Features from './components/Features';

import { CryptoContextProvider } from './context/CryptoContext'; // Context provider for app state

function App() {
  return (
    <CryptoContextProvider>
      <Router>
        {/* Common header/navigation shown on all pages */}
        <Header />

        {/* Define app routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<CoinTable />} />
          <Route path="/coins/:id" element={<CoinPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </Router>
    </CryptoContextProvider>
  );
}

export default App;
