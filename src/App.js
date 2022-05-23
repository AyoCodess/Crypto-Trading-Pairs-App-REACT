import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import AverageTickerValues from './components/AvgTickerValContainer';
import TradingPairBtnContainer from './components/TradingPairBtnContainer';
import SelectedBtnContainer from './components/SelectedBtnContainer';
import FetchStateContainer from './components/FetchStateContainer';
import { Chart } from './components/Chart';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [avgTradingPairPrice, setAvgTradingPairPrice] = useState(null);
  const [currencyPairButtonListData, setCurrencyPairButtonListData] =
    useState(null);
  const [selectedPair, setSelectedPair] = useState(null);

  //- chart- js

  const [ask, setAsk] = useState(null);
  const [dataArray, setDataArray] = useState([
    {
      name: selectedPair ? selectedPair : '',
      price: ask ? ask : 0,
    },
  ]);

  console.log(dataArray);

  useEffect(() => {
    const fetchingCurrencyPairs = async () => {
      setIsLoading(true);
      try {
        // - feting the the price of currency pairs.

        const bitmapCall = await axios(
          `https://www.bitstamp.net/api/v2/ticker/btcusd`
        );

        const coinbaseCall = await axios(
          `https://api.coinbase.com/v2/exchange-rates?currency=BTC`
        );

        const bitfinexCall = await axios(
          `https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD` //, pos 7 = last price
        );

        const coinbase = parseInt(coinbaseCall.data.data.rates.USD);
        const bitmap = parseInt(bitmapCall.data.open);
        const bitfinex = parseInt(bitfinexCall.data[0][7]);

        setAvgTradingPairPrice(
          ((coinbase + bitmap + bitfinex) / 3).toLocaleString()
        );

        //-  getting currency pairs for button list

        const currencyPairButtonList = await axios(
          `https://www.bitstamp.net/api/v2/trading-pairs-info/`
        );

        setCurrencyPairButtonListData(currencyPairButtonList.data);

        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchingCurrencyPairs();
  }, []);

  return (
    <div className=' flex flex-col h-screen '>
      <Header />
      <Layout>
        {isLoading && (
          <FetchStateContainer text={'Currency pairs are loading...'} />
        )}
        {isError && (
          <FetchStateContainer
            text={'Something went wrong, please try again'}
          />
        )}
        {!isLoading && !isError && (
          <>
            <AverageTickerValues avgTradingPairPrice={avgTradingPairPrice} />
            <TradingPairBtnContainer
              currencyPairButtonListData={currencyPairButtonListData}
              setSelectedPair={setSelectedPair}
              setDataArray={setDataArray}
            />
            <SelectedBtnContainer
              currencyPairButtonListData={currencyPairButtonListData}
              selectedPair={selectedPair}
            />
          </>
        )}
      </Layout>
      <Chart
        selectedPair={selectedPair}
        dataArray={dataArray}
        setDataArray={setDataArray}
        ask={ask}
        setAsk={setAsk}
      />
      <Footer />
    </div>
  );
}

export default App;
