import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({ coin }) => {
  return (
    <tr style={{ borderBottom: '1px solid lightgray' }}>
      <td style={{ padding: 10, display: 'flex', alignItems: 'center' }}>
        <img src={coin.image} alt={coin.name} style={{ width: 25, height: 25, marginRight: 15 }} />
        <Link to={`/coins/${coin.id}`} style={{ textDecoration: 'none', color:'inherit' }}>
          {coin.name}
        </Link>
      </td>
      <td style={{ padding: 10 }}>${coin.current_price.toLocaleString()}</td>
      <td style={{ padding: 10, color: coin.price_change_percentage_24h > 0 ? 'green' : 'red' }}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td style={{ padding: 10 }}>${coin.market_cap.toLocaleString()}</td>
    </tr>
  );
};

export default Coin;
