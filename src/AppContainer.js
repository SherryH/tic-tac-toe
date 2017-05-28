import {connect} from 'react-redux';
import App from './App';

const mapStateToProps= (state) => {
  console.log('mapStateToProps',state);
  const {is2PlayerGame} = state;
  return {
    is2PlayerGame,
  };
};

export default connect(mapStateToProps)(App);