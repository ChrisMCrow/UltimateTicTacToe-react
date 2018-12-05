const initialState = {
  playerTurn: 'X',
  lastSquare: null,
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
  default: {
    return state;
  }
  }
};