import axios from 'axios';
import BasicTextContainer from './BasicTextContainer';
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

export function Chart({
  selectedPair,
  dataArray,
  setDataArray,
  ask,
  setAsk,
  isError,
  setIsError,
}) {
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
      }
    } catch (err) {
      console.error(err);
      setIsError('Something when wrong, please refresh the page and try again');
    }
  };

  useEffect(() => {
    fetchChartData();
  }, [selectedPair]);

  const url = `https://www.bitstamp.net/api/v2/ticker/${selectedPair}`;
  const TIMETOWAIT = 10500;

  useEffect(() => {
    const id = setInterval(() => {
      axios(url)
        .then((res) => {
          setDataArray((prev) => [
            {
              name: selectedPair,
              price: res.data.ask,
            },
            ...prev,
          ]);
        })
        .catch((err) => {
          console.error(err);
          setIsError(
            'Something when wrong, please refresh the page and try again'
          );
        });
    }, TIMETOWAIT);
    return () => clearInterval(id);
  }, [dataArray]);

  return (
    <div className='mt-4  mb-6 mx-auto'>
      {selectedPair && (
        <BasicTextContainer
          text={`Current Price of ${selectedPair.toUpperCase()} Every 10secs`}
          custom={'font-medium mb-2'}
        />
      )}

      {!isError && (
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
      )}
      {!isError && (
        <>
          <BasicTextContainer
            text={
              'Note: The first symbol is denoted in the 2nd symbols base currency.'
            }
          />
          <BasicTextContainer text={'i.e BTC/USD = 1 BTC is worth $30K USD'} />
        </>
      )}
      {isError && <p className='text-center font-medium mb-2'>{isError}</p>}
    </div>
  );
}

export default Chart;
