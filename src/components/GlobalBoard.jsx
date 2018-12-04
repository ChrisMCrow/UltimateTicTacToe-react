import React from 'react';
import LocalBoard from './LocalBoard';

function GlobalBoard() {
  return (
    <div>
      <h3 className=''>GlobalBoard</h3>
        <LocalBoard/>
    </div>
  );
}

export default GlobalBoard;