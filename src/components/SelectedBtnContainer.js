import React from 'react';

function SelectedBtnContainer({ selectedPair, currencyPairButtonListData }) {
  return (
    <div className='flex flex-col justify-center items-center p-2 border border-blue-400 rounded-md shadow'>
      {selectedPair &&
        currencyPairButtonListData &&
        currencyPairButtonListData.map((pair) => {
          if (pair.url_symbol === selectedPair) {
            console.log('it exists');
            console.log(pair);
            return (
              <div key={pair.name} className=' flex flex-col gap-2 text-center'>
                <p className='text-lg text-blue-500 font-extrabold'>
                  {pair.description}
                </p>
                <p>
                  <span className='font-medium text-blue-500'>Ticker: </span>
                  {pair.name}
                </p>
                <p>
                  <span className='font-medium text-blue-500'>Trading: </span>
                  {pair.trading === 'Enabled' ? 'Enabled' : 'Disabled'}
                </p>

                <p>
                  <span className='font-medium text-blue-500'>
                    Minimum Order:{' '}
                  </span>
                  {pair.minimum_order}
                </p>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}

export default SelectedBtnContainer;
