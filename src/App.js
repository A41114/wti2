import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Redirect } from 'react-router-dom';
import store from './store';
import WordToImg from './WordToImg';

// function App() {
    
//     return (
//         <div className="App">
//             <wordToImg/>
//         </div>
//     )
    
  
// }

const App = () => {
    return (
      <Provider store={store}>
      <div>
        <WordToImg /> {/* Render component tại đây */}
      </div>
      </Provider>
    );
  };




// class App extends Component {

//   handlePersistorState = () => {
//       const { persistor } = this.props;
//       let { bootstrapped } = persistor.getState();
//       if (bootstrapped) {
//           if (this.props.onBeforeLift) {
//               Promise.resolve(this.props.onBeforeLift())
//                   .then(() => this.setState({ bootstrapped: true }))
//                   .catch(() => this.setState({ bootstrapped: true }));
//           } else {
//               this.setState({ bootstrapped: true });
//           }
//       }
//   };

//   componentDidMount() {
//       this.handlePersistorState();
//   }

//   render() {
//       return (
//         <Provider>
//           <Fragment>
//               <Router>
//                   <div className="main-container">
//                       <span className="content-container">
//                           <Switch>
                            
//                             <Route path={'/wordToImage'} exact component={wordToImg} />
//                           </Switch>
//                       </span>
                      
//                   </div>
//               </Router>
//           </Fragment>
//           </Provider>
//       )
//   }
// }

export default App;
