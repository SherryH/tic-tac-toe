import {SET_2_PLAYER_GAME} from '../constants';

export const setPlayerNum = (is2PlayerGame) =>{
  console.log('clicked set 2 player', is2PlayerGame);
  return {
    type: SET_2_PLAYER_GAME,
    SET_2_PLAYER_GAME: is2PlayerGame,
  };
};