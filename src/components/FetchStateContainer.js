import React from 'react';

function FetchStateContainer({ text }) {
  // - loading and error states
  return (
    <h3 className=' px-2 flex justify-center items-center text-center h-screen text-gray-500 md:col-span-2'>
      {text}
    </h3>
  );
}

export default FetchStateContainer;
