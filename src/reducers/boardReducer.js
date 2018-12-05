const initialState = [
  {
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },

];


export default (state = initialState, action) => {
  switch (action.type) {
  case 'MARK': {
    const { squareId, boardId, mark } = action;
    let newState = Object.assign({}, initialState);
    newState[boardId].position[squareId] = mark;
    return newState;
  }
  case 'LOCAL_WINNER': {
    const { boardId, mark } = action;
    let newState = Object.assign({}, initialState);
    newState[boardId].boardWinner = mark;
    return newState;
  }
  default: {
    return state;
  }
  }
};