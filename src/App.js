import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import GameChoice from './components/GameChoice';
import GameStart from './components/GameStart';
import GameBoard from './components/GameBoard';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// in order to merge routeProps {location, match} and other props
// create a custom PropsRoute component

//PropsRoute - I: combined props arguments, O: a <Route/> with all combined props

//React.createElement can combine props into the component

const renderMergedProps = (component, routeProps,...stateProps) =>{
  console.log('stateProps', stateProps);
  console.log('...stateProps', ...stateProps);
  const allProps = Object.assign({}, routeProps, ...stateProps);
  return React.createElement(component, allProps);
};

const PropsRoute = ({component, ...rest}) =>{
  console.log('rest',rest);
  return (<Route render={routeProps=>(
    renderMergedProps(component, routeProps, rest)
  )}/>);
};

const App = (props) =>{

  return (

      <Route {...props} render={({location, match})=>{
        {console.log('App render', props)}
        return(
          <CSSTransitionGroup
                transitionName="fade"
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={700}
                transitionLeaveTimeout={400}
          >
            <Switch key={location.key} location={location}>
              <PropsRoute key={location.key} exact path="/" component = {GameChoice} setPlayerNum={props.setPlayerNum}/>
              <Route key={location.key} path="/gamestart" component={GameStart} />
              <Route key={location.key} path="/gameboard" component={GameBoard} />
            </Switch>
          </CSSTransitionGroup>
        );

      }}/>
  );
};

export default App;

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     console.log('App constructor',this.props);
//   }


//   render(){
//     return (

//           <Route render={({location, match})=>{
//             {console.log('App render', this.props)}
//             return(
//               <CSSTransitionGroup
//                     transitionName="fade"
//                     transitionEnter={true}
//                     transitionLeave={true}
//                     transitionEnterTimeout={700}
//                     transitionLeaveTimeout={400}
//               >
//                 <Switch key={location.key} location={location}>
//                   <Route key={location.key} exact path="/" component = {GameChoice} ownStates={this.props}/>
//                   <Route key={location.key} path="/gamestart" component={GameStart} />
//                   <Route key={location.key} path="/gameboard" component={GameBoard} />
//                 </Switch>
//               </CSSTransitionGroup>
//             );

//           }}/>


//     );
//   }

// };

