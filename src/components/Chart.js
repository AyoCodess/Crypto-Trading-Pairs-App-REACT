import axios from 'axios';
import React, { useMemo, useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export function Chart({ selectedPair, dataArray, setDataArray, ask, setAsk }) {
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        if (selectedPair) {
          const d = await axios(
            `https://www.bitstamp.net/api/v2/ticker/${selectedPair}`
          );

          let ask = d.data.ask;

          setAsk(ask);
          setDataArray((prev) => [
            {
              name: selectedPair,
              price: ask,
            },
            ...prev,
          ]);
        } else {
          console.log(selectedPair);
        }
      } catch (err) {
        console.error(err);
      }
    };

    // setTimeout(() => {
    //   fetchChartData();
    // }, 10000);

    fetchChartData();
  }, [selectedPair]);

  return (
    <div className='mt-4  mb-6 mx-auto'>
      {selectedPair && (
        <p className='text-center font-medium mb-2'>
          Current Price of {selectedPair.toUpperCase()}
        </p>
      )}
      <LineChart
        width={370}
        height={300}
        data={dataArray}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='price'
          stroke='#6EA2F8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}

export default Chart;
