import axios from 'axios';

export const fetchCoinsData = async (currency = 'usd') => {
  const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
    params: {
      vs_currency: currency,
      order: 'market_cap_desc',
      per_page: 50,
      page: 1,
      sparkline: false,
    },
  });
  return data;
};

export const fetchHistoricalData = async (coinId, days = 30, currency = 'usd') => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`, {
      params: {
        vs_currency: currency,
        days,
      },
    }
  );
  // data.prices is an array: [timestamp, price]
  return data.prices;
};
