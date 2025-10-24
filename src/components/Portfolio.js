import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import "./Portfolio.css";

const Portfolio = () => {
  const { coins, transactions } = useContext(CryptoContext);

  const getCoinData = (coinId) => coins.find((c) => c.id === coinId);

  return (
    <div className="portfolio-bg">
      <div className="portfolio-container">
        <h2 className="portfolio-title">My Portfolio</h2>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date / Time</th>
              <th>Coin</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", fontStyle: "italic", padding: "18px" }}>
                  No transactions recorded yet.
                </td>
              </tr>
            ) : (
              transactions.map((tx, idx) => {
                const coin = getCoinData(tx.coinId);
                return (
                  <tr key={idx}>
                    <td className="transaction-date">{tx.time}</td>
                    <td>{coin ? coin.name : tx.coinId}</td>
                    <td className={tx.type === "Buy" ? "transaction-buy" : "transaction-sell"}>{tx.type}</td>
                    <td>{tx.quantity}</td>
                    <td>{tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td>{tx.currency && tx.currency.toUpperCase()}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
