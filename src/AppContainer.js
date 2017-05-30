import {connect} from 'react-redux';
import App from './App';
import {setPlayerNum} from './actionCreator/action';
import { bindActionCreators } from 'redux';

const mapStateToProps= (state) => {
  console.log('mapStateToProps',state);
  const {is2PlayerGame} = state;
  return {
    is2PlayerGame,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    setPlayerNum: bindActionCreators(setPlayerNum, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);