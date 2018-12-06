
import React from 'react';

function Header() {
  return (
    <div className='jumbotron'>
      <style jsx>{`
        .jumbotron {
          background-color: black;
          text-align: center;
        }
      `}</style>
      <h1>Ultimate Tic-Tac-Toe</h1>
    </div>
  );
}

export default Header;