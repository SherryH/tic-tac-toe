import {SET_2_PLAYER_GAME} from '../constants';
const initialStates = {
  is2PlayerGame: null,
};

const reducer = (state=initialStates, action) => {
  switch (action.type){
    case SET_2_PLAYER_GAME:
      return Object.assign({},state,{is2PlayerGame: SET_2_PLAYER_GAME});

    default:
      return state;
  }
};

export default reducer;