import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the scales and components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ historicalData, currency }) => {
  const data = {
    labels: historicalData.map((point) => new Date(point[0]).toLocaleDateString()),
    datasets: [
      {
        label: `Price (in ${currency.toUpperCase()})`,
        data: historicalData.map((point) => point[1]),
        fill: false,
        borderColor: '#1976d2',
        backgroundColor: '#1976d2',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Cryptocurrency Price over Time' },
    },
    scales: {
      x: {
        type: 'category',
        title: { display: true, text: 'Date' },
      },
      y: {
        type: 'linear',
        title: { display: true, text: `Price (${currency.toUpperCase()})` },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Chart;
