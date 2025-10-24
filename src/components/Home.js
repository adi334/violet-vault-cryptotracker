import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic or connect to your Table page logic
  };

  return (
    <div className="home-bg">
      <div className="home-hero-container" role="main" aria-label="Welcome to VioletVault">
        <div className="home-title">Largest</div>
        <div className="home-market-color">Crypto Marketplace</div>
        <div className="home-subtitle">
          Welcome to the world's largest cryptocurrency marketplace.<br />
          Sign up to explore more about cryptos.
        </div>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Search crypto.."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
