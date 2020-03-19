import React from 'react';

export const App = ({ children }) => {
  return (
    <div>
      <div className='container'>{children}</div>
    </div>
  );
};
