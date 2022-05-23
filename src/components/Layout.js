import React from 'react';

function Layout({ children }) {
  return (
    <div className='p-2 grid gap-2 md:grid-cols-2 my-auto'>{children}</div>
  );
}

export default Layout;
