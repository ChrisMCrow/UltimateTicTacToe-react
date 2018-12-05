import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function LocalBoard(props) {
  function handleMark(square) {
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
      dispatch({type: 'NEXT_TURN'});
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
    for (let i = 0; i < winConditions.length; i++) {
      let threeInARow = 0;
      for (let j = 0; j <= 2; j++) {
        if (square[winConditions[i][j]] === props.gameStatus.playerTurn) {
          threeInARow++;
        }
      }
      if (threeInARow === 3) {
        const { dispatch } = props;
        const action = {
          type: 'LOCAL_WINNER',
          boardId: props.boardId,
          mark: props.gameStatus.playerTurn
        };
        let targetDiv = document.getElementById(`board${props.boardId}`);
        console.log(targetDiv);
        targetDiv.appendChild(document.createTextNode(`${props.gameStatus.playerTurn}`));
        return dispatch(action);
      }
    }
  }

  return (
    <div id='local-board'>
      <style jsx>{`
        .center-horizontal {
          border-top: 2px solid black;
          border-bottom: 2px solid black;
        }
        .center-vertical {
          border-left: 2px solid black;
          border-right: 2px solid black;
        }
        .square {
          text-align: center;
          height: 80px;
          max-width: 80px;
          cursor: pointer;
        }
        #local-board {
          padding: 10px;
        }
        .col-4 {
          padding: 0 !important;
        }
        .player-mark {
          padding-top: 15px;
          font-size: 36px;
        }
        .board-winner {
          position: absolute;
          width: 100%;
          text-align: center;
          padding: 0 auto;
          top: -60px;
          left: 0;
          font-size: 30vw;
          max-width: 265px;
          color: blue;
          z-index: 1;
        }
        @media screen and (min-width: 992px) {
          .board-winner {
             font-size: 265px;
          }
        }        
      `}</style>
      <div className='board-winner' id={`board${props.boardId}`}>
      </div>
      <div className='row'>
        <div className='col-4 square' onClick={() => { handleMark(0); }}>
          <Square localPositions={props.localData.position} squareId={0} />
          <div className='player-mark'>
            {props.localData.position[0]}
          </div>
        </div>
        <div className='col-4 square center-vertical' onClick={() => { handleMark(1); }}>
          <Square localPositions={props.localData.position} squareId={1} />
          <div className='player-mark'>
            {props.localData.position[1]}
          </div>
        </div>
        <div className='col-4 square' onClick={() => { handleMark(2); }}>
          <Square localPositions={props.localData.position} squareId={2} />
          <div className='player-mark'>
            {props.localData.position[2]}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-4 square center-horizontal' onClick={() => { handleMark(3); }}>
          <Square localPositions={props.localData.position} squareId={3} />
          <div className='player-mark'>
            {props.localData.position[3]}
          </div>
        </div>
        <div className='col-4 square center-horizontal center-vertical' onClick={() => { handleMark(4); }}>
          <Square localPositions={props.localData.position} squareId={4} />
          <div className='player-mark'>
            {props.localData.position[4]}
          </div>
        </div>
        <div className='col-4 square center-horizontal' onClick={() => { handleMark(5); }}>
          <Square localPositions={props.localData.position} squareId={5} />
          <div className='player-mark'>
            {props.localData.position[5]}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-4 square' onClick={() => { handleMark(6); }}>
          <Square localPositions={props.localData.position} squareId={6} />
          <div className='player-mark'>
            {props.localData.position[6]}
          </div>
        </div>
        <div className='col-4 square center-vertical' onClick={() => { handleMark(7); }}>
          <Square localPositions={props.localData.position} squareId={7} />
          <div className='player-mark'>
            {props.localData.position[7]}
          </div>
        </div>
        <div className='col-4 square' onClick={() => { handleMark(8); }}>
          <Square localPositions={props.localData.position} squareId={8} />
          <div className='player-mark'>
            {props.localData.position[8]}
          </div>
        </div>
      </div>
    </div>
  );
}

LocalBoard.propTypes = {
  boardId: PropTypes.number,
  localData: PropTypes.object,
  dispatch: PropTypes.func,
  gameStatus: PropTypes.object
};

export default LocalBoard;