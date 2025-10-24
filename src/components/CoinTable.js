import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import { useNavigate } from 'react-router-dom';
import './CoinTable.css';

const CoinTable = () => {
  const { coins } = useContext(CryptoContext);
  const navigate = useNavigate();

  return (
    <div className="crypto-list-bg">
      <div className="custom-table-container glass-card">
        <h2 style={{
          color: "#fff",
          textAlign: "center",
          fontWeight: 800,
          fontFamily: "Poppins, Segoe UI, Arial",
          fontSize: "2rem",
          letterSpacing: ".03em",
          marginBottom: "32px",
        }}>
          Cryptocurrency Prices
        </h2>
        <table className="custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Coins</th>
              <th>Price</th>
              <th>24H Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, idx) => (
              <tr key={coin.id} onClick={() => navigate(`/coins/${coin.id}`)}>
                <td>{idx + 1}</td>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <img src={coin.image} alt={coin.name} width={26} style={{ marginRight: 8 }} />
                  <span style={{ fontWeight: 500 }}>{coin.name}</span>
                  <span style={{ opacity: 0.7, marginLeft: 5, fontSize: "0.95em" }}> - {coin.symbol}</span>
                </td>
                <td>€ {coin.current_price.toLocaleString()}</td>
                <td className={coin.price_change_percentage_24h >= 0 ? "positive" : "negative"}>
                  {coin.price_change_percentage_24h.toFixed(2)}
                </td>
                <td>€ {coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinTable;
