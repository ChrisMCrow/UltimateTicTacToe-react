import React from 'react';
import LocalBoard from './LocalBoard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GlobalBoard extends React.Component {
  constructor(props) {
    super(props);
    this.bgColor;
  }

  componentDidUpdate() {
    for (let i = 0; i < this.props.boardData.length; i++) {
      console.log(`Does ${this.props.gameStatus.lastSquare} equal ${this.props.boardData[i].position}`);
      let target = document.getElementById(`gl-board${i}`)
      if (this.props.boardData[i].boardWinner || !(this.props.boardData[i].position.includes(null))) {
        target.classList.remove('mark-playable');
        target.classList.add('not-playable');
      } else if (this.props.gameStatus.lastSquare === i) {
        target.classList.add('mark-playable');
      } else {
        target.classList.remove('mark-playable');
      }
      console.log(this.bgColor);
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <style jsx>{`
          h3 {
            text-align: center;
            margin-bottom: 5px;
          }
          .wrapper {
            width: 800px;
            margin: 0 auto;
          }
          .local-board {
            float: left;
            width: 260px;
            height: 260px;
          }
          #gl-board3, #gl-board4, #gl-board5 {
            border-top: 5px solid black;
            border-bottom: 5px solid black;
          }
          .wrapper div:nth-child(3n + 2) {
            border-left: 5px solid black;
            border-right: 5px solid black;
          }
          .not-playable {
            background-color: lightgray;
          } 
          .x-condition {
            background-color: pink;
          }
          .o-condition {
            background-color: gold;
          }
          .mark-playable {
            background-color: lightgreen;
          }
        `}</style>
        {this.props.boardData.map((board, index) => (
          <div key={index} className={`${this.bgColor} local-board`} id={'gl-board' + index}>
            <LocalBoard
              gameStatus={this.props.gameStatus}
              dispatch={this.props.dispatch}
              localData={board}
              boardId={index}
            />
          </div>
        ))}
      </div>
    );
  }
}

GlobalBoard.propTypes = {
  boardData: PropTypes.array,
  dispatch: PropTypes.func,
  gameStatus: PropTypes.object
};

const mapStateToProps = state => {
  return {
    boardData: state.boardData,
    gameStatus: state.gameStatus
  };
};

export default connect(mapStateToProps)(GlobalBoard);