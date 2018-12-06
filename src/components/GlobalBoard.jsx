import React from 'react';
import LocalBoard from './LocalBoard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class GlobalBoard extends React.Component {
  constructor(props) {
    super(props);
    this.bgColor;
    this.checkWin = this.checkWin.bind(this);
  }

  

  componentDidUpdate() {
    for (let i = 0; i < this.props.boardData.length; i++) {
      let target = document.getElementById(`gl-board${i}`);
      if (this.props.boardData[i].boardWinner || !(this.props.boardData[i].position.includes(null))) {
        target.classList.remove('mark-playable');
        target.classList.add('not-playable');
      } else if (this.props.gameStatus.lastSquare === i || this.props.gameStatus.lastSquare === null) {
        target.classList.add('mark-playable');
      } else {
        target.classList.remove('mark-playable');
      }
    }
  }

  checkWin() {
    let winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const { dispatch } = this.props;
    let action = {
      type: 'GLOBAL_WINNER',
      boardId: this.props.boardId,
      mark: null
    };
    let targetDiv = document.getElementById('gameBoard');
    let boardWinnerCount = this.props.boardData.filter( lBoard => (lBoard.boardWinner !== null)).length;
    for (let i = 0; i < winConditions.length; i++) {
      let threeInARow = 0;
      for (let j = 0; j <= 2; j++) {
        if (this.props.boardData[winConditions[i][j]].boardWinner === this.props.gameStatus.playerTurn) {
          // console.log('i is ' + i,'one in a row for ', this.props.boardData[winConditions[i][j]],this.props.gameStatus.playerTurn);
          threeInARow++;
        }
      }
      if (threeInARow === 3) {
        action.mark = this.props.gameStatus.playerTurn;
        targetDiv.appendChild(document.createTextNode(`${action.mark}`));
        return dispatch(action);
      } else if (boardWinnerCount >= 9) {
        // if (!this.props.localData.position.includes(null))
        console.log('Tie Game - Game Over');
        action.mark = '🐱';
        targetDiv.innerHTML = '<img src="https://img.icons8.com/android/96/f1c40f/cat.png" className="cat">';
        return dispatch(action);
      }
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
            background-color: #473A6B;
          }
          .local-board {
            background-color: #473A6B;
            float: left;
            width: 260px;
            height: 260px;
          }
          #gl-board3, #gl-board4, #gl-board5 {
            border-top: 5px solid black;
            border-bottom: 5px solid black;
          }
          #gl-board1, #gl-board4, #gl-board7 {
            border-left: 5px solid black;
            border-right: 5px solid black;
          }
          .global-winner {
            position: absolute;
            text-align: center;
            left: 20px;
            right: auto;
            font-size: 1065px;
            color: red;
            z-index: 2;
            line-height: 1;
            width: 200px;
  
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
            background-color: #97DE00;
          }
        `}</style>
        <div className='global-winner' id='gameBoard'>
        </div>
        {this.props.boardData.map((board, index) => (
          <div key={index} style={{backgroundColor: `${this.backgroundColor}`}} className={`${this.bgColor} local-board`} id={'gl-board' + index}>
            <LocalBoard
              gameStatus={this.props.gameStatus}
              dispatch={this.props.dispatch}
              localData={board}
              boardData={this.props.boardData}
              boardId={index}
              globalCheckWin={this.checkWin}
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
  gameStatus: PropTypes.object,
  boardId: PropTypes.number
};

const mapStateToProps = state => {
  return {
    boardData: state.boardData,
    gameStatus: state.gameStatus
  };
};

export default connect(mapStateToProps)(GlobalBoard);