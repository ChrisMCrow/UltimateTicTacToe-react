const initialState = [
  {
    boardPlayable: true,
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardPlayable: true,
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardPlayable: true,
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardPlayable: true,
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardPlayable: true,
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardPlayable: true,
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardPlayable: true,
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardPlayable: true,
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },
  {
    boardPlayable: true,
    boardWinner: null,
    position: [null, null, null,
      null, null, null,
      null, null, null]
  },

];


export default (state = initialState, action) => {
  switch (action.type) {
  case 'MARK_X': {
    const { squareId, boardId } = action;
    let newState = Object.assign({}, initialState);
    newState[boardId].position[squareId] = 'X';
    return newState;
  }
  default: {
    return state;
  }
  }
};