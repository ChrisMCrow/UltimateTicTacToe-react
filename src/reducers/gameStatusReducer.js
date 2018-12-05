const initialState = {
  playerTurn: 'X'
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'NEXT_TURN': {
    let newState = Object.assign({}, state);
    newState.playerTurn = (newState.playerTurn === 'X' ?  'O' : 'X');
    return newState;
  }
  default: {
    return state;
  }
  }
};