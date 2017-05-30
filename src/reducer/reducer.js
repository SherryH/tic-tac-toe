import {SET_2_PLAYER_GAME} from '../constants';
const initialStates = {
  is2PlayerGame: null,
};

const reducer = (state=initialStates, action) => {
  switch (action.type){
    case SET_2_PLAYER_GAME:
      console.log('reducer triggered', action);
      return Object.assign({},state,{is2PlayerGame: action.SET_2_PLAYER_GAME});

    default:
      console.log('reducer', state);
      return state;
  }
};

export default reducer;