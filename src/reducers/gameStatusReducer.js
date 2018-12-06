const initialState = {
  playerTurn: 'X',
  lastSquare: null,
  gameWinner: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'NEXT_TURN': {
    const { lastSquare } = action;
    let newState = Object.assign({}, state);
    newState.playerTurn = (newState.playerTurn === 'X' ?  'O' : 'X');
    newState.lastSquare = lastSquare;
    return newState;
  }
  case 'GLOBAL_WINNER': {
    const { mark } = action;
    let newState = state.slice();
    newState.gameWinner = mark;
    return newState;
  }  
  default: {
    return state;
  }
  }
};