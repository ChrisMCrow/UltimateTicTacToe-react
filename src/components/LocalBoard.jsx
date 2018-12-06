import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function LocalBoard(props) {
  function handleMark(square) {
    if (props.gameStatus.lastSquare === props.boardId || props.gameStatus.lastSquare === null) {
    if (props.localData.position[square] === null) {
      const { dispatch } = props;
      const boardAction = {
        type: 'MARK',
        squareId: square,
        boardId: props.boardId,
        mark: props.gameStatus.playerTurn
      };
      dispatch(boardAction);
      checkWin();
      let gameAction = {
        type: 'NEXT_TURN',
        lastSquare: square
      };
      if (props.boardData[square].boardWinner) {
        gameAction.lastSquare = null;
      }
      dispatch(gameAction);
    }
    }
  }

  function checkWin() {
    let square = props.localData.position;
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
    const { dispatch } = props;
    let action = {
      type: 'LOCAL_WINNER',
      boardId: props.boardId,
      mark: null
    };
    let targetDiv = document.getElementById(`board${props.boardId}`);
    for (let i = 0; i < winConditions.length; i++) {
      let threeInARow = 0;
      for (let j = 0; j <= 2; j++) {
        if (square[winConditions[i][j]] === props.gameStatus.playerTurn) {
          threeInARow++;
        }
      }
      if (threeInARow === 3) {
        action.mark = props.gameStatus.playerTurn;
        targetDiv.appendChild(document.createTextNode(`${action.mark}`));
        return dispatch(action);
      } else if (!props.localData.position.includes(null)) {
        action.mark = '🐱';
        targetDiv.innerHTML = '<img src="https://img.icons8.com/android/96/f1c40f/cat.png" className="cat">';
        return dispatch(action);
      }
    }
  }

  return (
    <div className='local-wrapper' id='local-board'>
      <style jsx>{`
        #lc-board3, #lc-board4, #lc-board5 {
          border-top: 2px solid black;
          border-bottom: 2px solid black;
        }
        #lc-board1, #lc-board4, #lc-board7 {
          border-left: 2px solid black;
          border-right: 2px solid black;
        }
        .player-mark {
          padding-top: 10px;
          font-size: 42px;
        }
        .square {
          text-align: center;
          height: 80px;
          width: 80px;
          cursor: pointer;
          float: left;
        }
        #local-board {
          margin: 5px 0 0 5px;
        }
        .board-winner {
          position: absolute;
          text-align: center;
          left: 20px;
          right: auto;
          font-size: 265px;
          color: blue;
          z-index: 1;
          line-height: 1;
          width: 200px;

        }
        .square-wrapper {
          position: relative;
        }
        .cat {
          height: 200%;
        }        
      `}</style>
      {props.localData.position.map((square, index) => (
        <div className='square-wrapper' key={index} onClick={() => { handleMark(index); }}>
          <div className='board-winner' id={`board${props.boardId}`}>
          </div>
          <div className='player-mark square' id={'lc-board' + index}>
            {square}
          </div>        
        </div>
      ))}
    </div>
  );
}

LocalBoard.propTypes = {
  boardId: PropTypes.number,
  localData: PropTypes.object,
  dispatch: PropTypes.func,
  gameStatus: PropTypes.object,
  boardData: PropTypes.array
};

export default LocalBoard;