const initialState = {
  playerTurn: 'X'
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'MARK': {
    let newState = Object.assign({}, state);
    newState.playerTurn = (newState.playerTurn === 'X' ?  'O' : 'X');
    console.log(newState.playerTurn);
    return newState;
  }
  default: {
    return state;
  }
  }
};