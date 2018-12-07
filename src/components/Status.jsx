import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Status extends React.Component {
  constructor(props) {
    super(props);
  }

  getWinner() {
    let winner = (this.props.gameStatus.gameWinner);
    if (winner) {
      return <h3 className='win-status'>The Winner is player "{winner}"! Click the board to play again!</h3>;
    }
  }
  render() {
    return (
      <div className='status'>
        <style jsx>{`
            .status {
              padding: 0 20px 20px 0;
              text-align: right;
            }
            .status h3 {
              color: #FECF87;
              font-weight: bold;
              font-size: 40px;
              text-shadow: 1px 1px 0px black, 1px -1px 0px black, -1px 1px 0 black, -1px -1px 0 black;
            }
            .win-status {
              text-align: center;
            }
          }
        `}</style>
        <div >
          <h3 >Player Turn: {this.props.gameStatus.playerTurn}</h3>
          {this.getWinner()}
        </div>
      </div>
    );
  }
}

Status.propTypes = {
  gameStatus: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    gameStatus: state.gameStatus
  };
};

export default connect(mapStateToProps)(Status);