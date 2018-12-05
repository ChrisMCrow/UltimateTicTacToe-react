import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function LocalBoard(props) {
  console.log('LocalBoard props: ', props);
  function handleMark(position) {
    const { dispatch } = props;
    const action = {
      type: 'MARK',
      squareId: position,
      boardId: props.boardId,
      mark: props.gameStatus.playerTurn
    };
    console.log('handleMark action: ', action);
    dispatch(action);

    checkWin();
  }

  function checkWin() {
    if (props.localData.position[0] === props.localData.position[1] &&
      props.localData.position[1] === props.localData.position[2] && props.localData.position[0] === 'X') {
      console.log('win');
    }
  }

  return (
    <div className='local-board'>
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
        }
        .local-board {
          padding: 10px;
        }
        .col-4 {
          padding: 0 !important;
        }
      `}</style>
      <div className='row'>
        <div className='col-4 square' onClick={() => { handleMark(0); }}>
          <Square localPositions={props.localData.position} squareId={0} />
          <div>
            {props.localData.position[0]}
          </div>
        </div>
        <div className='col-4 square center-vertical' onClick={() => { handleMark(1); }}>
          <Square localPositions={props.localData.position} squareId={1} />
          <div>
            {props.localData.position[1]}
          </div>
        </div>
        <div className='col-4 square' onClick={() => { handleMark(2); }}>
          <Square localPositions={props.localData.position} squareId={2} />
          <div>
            {props.localData.position[2]}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-4 square center-horizontal' onClick={() => { handleMark(3); }}>
          <Square localPositions={props.localData.position} squareId={3} />
          <div>
            {props.localData.position[3]}
          </div>
        </div>
        <div className='col-4 square center-horizontal center-vertical' onClick={() => { handleMark(4); }}>
          <Square localPositions={props.localData.position} squareId={4} />
          <div>
            {props.localData.position[4]}
          </div>
        </div>
        <div className='col-4 square center-horizontal' onClick={() => { handleMark(5); }}>
          <Square localPositions={props.localData.position} squareId={5} />
          <div>
            {props.localData.position[5]}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-4 square' onClick={() => { handleMark(6); }}>
          <Square localPositions={props.localData.position} squareId={6} />
          <div>
            {props.localData.position[6]}
          </div>
        </div>
        <div className='col-4 square center-vertical' onClick={() => { handleMark(7); }}>
          <Square localPositions={props.localData.position} squareId={7} />
          <div>
            {props.localData.position[7]}
          </div>
        </div>
        <div className='col-4 square' onClick={() => { handleMark(8); }}>
          <Square localPositions={props.localData.position} squareId={8} />
          <div>
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