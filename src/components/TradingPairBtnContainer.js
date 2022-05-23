import React from 'react';

function TradingPairBtnContainer({
  currencyPairButtonListData,
  setSelectedPair,
  setDataArray,
}) {
  return (
    <div className='flex flex-col justify-center p-2 border border-gray-100 rounded-md shadow-lg max-h-96   '>
      <h2 className='p-2 text-center'>
        Select Your Trading Pair & View Trading Info
      </h2>
      <hr className='border-gray-100 border rounded-md ' />

      <div className='grid grid-cols-3 gap-3 overflow-auto overflow-x-hidden mt-2'>
        {currencyPairButtonListData &&
          currencyPairButtonListData.map((pair) => {
            return (
              <button
                key={pair.name}
                onClick={() => {
                  setSelectedPair(pair.name.split('/').join('').toLowerCase());

                  setDataArray((prev) => {
                    return [null];
                  });
                }}
                className='p-2 border cursor-pointer border-gray-200 shadow-md rounded-md hover:bg-blue-400 hover:text-white s '>
                {pair.name}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default TradingPairBtnContainer;
