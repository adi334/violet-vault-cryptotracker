// CryptoContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchCoinsData } from '../api/coinGecko';

export const CryptoContext = createContext();

export const CryptoContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState('usd');
  const [coins, setCoins] = useState([]);
  const [portfolio, setPortfolio] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
      const data = await fetchCoinsData(currency);
      setCoins(data);
    };
    getCoins();
  }, [currency]);

  const buyCoin = (coinId, quantity, amount, currency) => {
    setPortfolio(prev => ({
      ...prev,
      [coinId]: (prev[coinId] || 0) + quantity,
    }));
    setTransactions(prev => [
      ...prev,
      {
        coinId,
        type: 'Buy',
        quantity,
        amount,
        currency,
        time: new Date().toLocaleString(),
      }
    ]);
  };

  const sellCoin = (coinId, quantity, amount, currency) => {
    setPortfolio(prev => {
      const current = prev[coinId] || 0;
      const newAmount = current - quantity;
      if (newAmount <= 0) {
        const copy = { ...prev };
        delete copy[coinId];
        return copy;
      }
      return { ...prev, [coinId]: newAmount };
    });
    setTransactions(prev => [
      ...prev,
      {
        coinId,
        type: 'Sell',
        quantity,
        amount,
        currency,
        time: new Date().toLocaleString(),
      }
    ]);
  };

  return (
    <CryptoContext.Provider value={{
      currency,
      setCurrency,
      coins,
      portfolio,
      buyCoin,
      sellCoin,
      transactions
    }}>
      {children}
    </CryptoContext.Provider>
  );
};
