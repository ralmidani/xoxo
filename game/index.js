import {Map} from 'immutable'

const initialState = {
  board: Map(),
  turn: 'X'
};

const MOVE = 'MOVE';

export const move = (player, position) => ({type: MOVE, position, player});

export default function reducer(state = initialState, action) {
  // TODO
  switch (action.type) {
    case 'START':
      return state;
    case 'MOVE':
      return {board: state.board.setIn(action.position, action.player), turn: action.player === 'X' ? 'O' : 'X'}
    default:
      return state;
  }
}