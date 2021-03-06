import React from 'react';

function AverageTickerValues({ avgTradingPairPrice }) {
  return (
    <div className=' flex flex-col justify-center p-2 border border-gray-100 rounded-md shadow-lg md:row-start-1 md:row-span-2'>
      <h2 className='mt-2 text-center'>
        The most current average price of{' '}
        <span className='font-extrabold text-yellow-500'>Bitcoin </span>from
        Coinbase, Bitmap & Bitfinex in USD
      </h2>
      <hr className='w-2/4 my-4 border border-gray-200 mx-auto' />
      <div className=' flex justify-center mb-2'>
        <h3 className='text-xl font-medium text-blue-300 border border-gray-100 shadow rounded-md p-2'>
          ${avgTradingPairPrice}
        </h3>
      </div>
    </div>
  );
}

export default AverageTickerValues;
