import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import GlobalBoard from './GlobalBoard';

function App() {
  return (
    <div >
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      <Header/>
      <GlobalBoard/>

    </div>
  );
}
  
export default connect()(App);