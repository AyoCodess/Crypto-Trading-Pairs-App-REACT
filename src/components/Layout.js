import React from 'react';

function Layout({ children }) {
  return (
    <div className='px-2 grid gap-2 md:grid-cols-2 mt-3 mb-auto md:my-auto '>
      {children}
    </div>
  );
}

export default Layout;
