import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class App extends React.Component{
  render() {

    return (
      <div >
        <style jsx>{`
          font-family: Helvetica;
        `}</style>
        UltimateTicTacToe
  
      </div>
    );
  }
}


App.propTypes = {
  masterTicketList: PropTypes.object,
  selectedTicket: PropTypes.string
};
  
const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};
  
export default connect(mapStateToProps)(App);