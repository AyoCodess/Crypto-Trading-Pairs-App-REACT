import React from 'react';

function TradingPairBtnContainer({
  currencyPairButtonListData,
  setSelectedPair,
}) {
  return (
    <div className='flex flex-col justify-center p-2 border border-blue-200 rounded-md shadow max-h-96  overflow-y-auto'>
      <h2 className='p-2 text-center'>
        Select Your Trading Pair & View Trading Info
      </h2>
      <hr className='border-blue-100 border rounded-md ' />

      <div className='grid grid-cols-3 gap-3 overflow-auto mt-2'>
        {currencyPairButtonListData &&
          currencyPairButtonListData.map((pair) => {
            return (
              <button
                key={pair.name}
                onClick={() =>
                  setSelectedPair(pair.name.split('/').join('').toLowerCase())
                }
                className='p-2 border cursor-pointer border-gray-400 shadow rounded-md hover:bg-blue-400 hover:text-white s '>
                {pair.name}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default TradingPairBtnContainer;
