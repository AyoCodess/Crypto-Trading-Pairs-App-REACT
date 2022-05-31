import React from 'react';

// function SelectedBtnContainer({ selectedPair, currencyPairButtonListData }) {
//   return (
//     <div className='flex flex-col justify-center items-center p-2 border border-gray-100 rounded-md shadow-lg'>
//       {!selectedPair && <p>Select trading pair above</p>}
//       {selectedPair &&
//         currencyPairButtonListData &&
//         currencyPairButtonListData.map((pair) => {
//           if (pair.url_symbol === selectedPair) {
//             return (
//               <div key={pair.name} className=' flex flex-col gap-2 text-center'>
//                 <p className='text-lg text-blue-300 font-extrabold'>
//                   {pair.description}
//                 </p>
//                 <p>
//                   <span className='font-medium text-blue-300'>Ticker: </span>
//                   {pair.name}
//                 </p>
//                 <p>
//                   <span className='font-medium text-blue-300'>Trading: </span>
//                   {pair.trading === 'Enabled' ? 'Enabled' : 'Disabled'}
//                 </p>

//                 <p>
//                   <span className='font-medium text-blue-300'>
//                     Minimum Order:{' '}
//                   </span>
//                   {pair.minimum_order}
//                 </p>
//               </div>
//             );
//           }
//           return null;
//         })}
//     </div>
//   );
// }

// export default SelectedBtnContainer;

function SelectedBtnContainer({ selectedPair, currencyPairButtonListData }) {
  return (
    <div className='flex flex-col justify-center items-center p-2 border border-gray-100 rounded-md shadow-lg'>
      {!selectedPair && <p>Select trading pair above</p>}
      {selectedPair &&
        currencyPairButtonListData &&
        currencyPairButtonListData.reduce((acc, pair) => {
          if (pair.url_symbol === selectedPair) {
            acc.push(
              <div key={pair.name} className=' flex flex-col gap-2 text-center'>
                <p className='text-lg text-blue-300 font-extrabold'>
                  {pair.description}
                </p>
                <p>
                  <span className='font-medium text-blue-300'>Ticker: </span>
                  {pair.name}
                </p>
                <p>
                  <span className='font-medium text-blue-300'>Trading: </span>
                  {pair.trading === 'Enabled' ? 'Enabled' : 'Disabled'}
                </p>

                <p>
                  <span className='font-medium text-blue-300'>
                    Minimum Order:{' '}
                  </span>
                  {pair.minimum_order}
                </p>
              </div>
            );
          }
          return acc;
        }, [])}
    </div>
  );
}

export default SelectedBtnContainer;
