import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const BitcoinChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API or other source
    const fetchData = async () => {
      const result = await fetch(
        'https://api.coindesk.com/v1/bpi/historical/close.json?start=2010-07-17&end=2022-07-10&currency=usd'
      );
      const json = await result.json();
      setData(json.bpi);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Create the chart when the data is available
    const canvas = document.getElementById('bitcoin-chart') as HTMLCanvasElement;
    if (canvas == null) throw new Error('Could not get canvas');
    const ctx = canvas.getContext('2d');
    if (ctx == null) throw new Error('Could not get context');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            label: 'Bitcoin Price',
            data: Object.values(data),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [data]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <canvas id="bitcoin-chart" className="w-full h-64"></canvas>
    </div>
  );
};

export default BitcoinChart;
