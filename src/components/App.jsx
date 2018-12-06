import React from 'react';
import GlobalBoard from './GlobalBoard';
import Header from './Header';

function App() {
  return (
    <div className='page'>
      <style jsx global>{`
        .page {
          font-family: Helvetica;
          background-color: #473A6B;
        }
      `}</style>
      <Header />
      <GlobalBoard />
    </div>
  );
}
  
export default App;