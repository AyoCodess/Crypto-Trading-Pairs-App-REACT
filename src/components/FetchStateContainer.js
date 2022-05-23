import React from 'react';

function FetchStateContainer({ text }) {
  // - loading and error states
  return (
    <h3 className=' flex justify-center items-center h-screen text-gray-500'>
      {text}
    </h3>
  );
}

export default FetchStateContainer;
