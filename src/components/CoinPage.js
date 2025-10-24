import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHistoricalData } from '../api/coinGecko';
import Chart from './Chart';
import { CryptoContext } from '../context/CryptoContext';
import './CoinPage.css';

const CoinPage = () => {
  const { id } = useParams();
  const { currency, coins, buyCoin, sellCoin } = useContext(CryptoContext);
  const [historicalData, setHistoricalData] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [showNotify, setShowNotify] = useState(false);

  const coin = coins.find(c => c.id === id);

  useEffect(() => {
    const getHistoricalData = async () => {
      const data = await fetchHistoricalData(id, 30, currency);
      setHistoricalData(data);
    };
    getHistoricalData();
  }, [id, currency]);

  const handleAction = (type) => {
    if (+quantity > 0 && coin) {
      const amount = +quantity * coin.current_price;
      if (type === 'buy') buyCoin(id, +quantity, amount, currency);
      else if (type === 'sell') sellCoin(id, +quantity, amount, currency);
      setQuantity('');
      setShowNotify(true);
      setTimeout(() => setShowNotify(false), 2200);
    }
  };

  return (
    <div className="coinpage-bg">
      <div className="coin-fullpage-glass">
        {showNotify && (
          <div className="coin-notify">
            Transaction done successfully!
            <button onClick={() => setShowNotify(false)} aria-label="Close notification">×</button>
          </div>
        )}
        <div className="coin-title" style={{ marginBottom: 18 }}>
          {coin ? `${coin.name} (${coin.symbol.toUpperCase()})` : id.toUpperCase()} Price Chart (30 days)
        </div>
        <div className="coinpage-chart-glass">
          <Chart historicalData={historicalData} currency={currency} height={370} width={680} />
        </div>
        <div className="coin-action-bar" style={{ marginTop: 32 }}>
          <input
            className="coin-amount-input"
            type="number"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            placeholder="Quantity"
            min="1"
          />
          <button className="coin-action-btn buy" onClick={() => handleAction('buy')}>
            Buy
          </button>
          <button className="coin-action-btn sell" onClick={() => handleAction('sell')}>
            Sell
          </button>
        </div>
        {coin && (
          <div style={{
            textAlign: 'center',
            margin: '18px auto 0 auto',
            color: '#eedcff',
            fontSize: '1.08rem'
          }}>
            Current price: {currency.toUpperCase()} {coin.current_price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinPage;
