import React from 'react';
import { Provider } from 'redux';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import App from './components/App';
import { createStore, combineReducers } from 'redux';

const sample = (state={},payload) => {
  return payload;
}

// let reducer = combineReducers({
//   sample
// });
// let store = createStore(reducer);


let RouterJi = () =>
<Router history={browserHistory}  >
  <Route path="/" component={App}>

  </Route>
</Router>


module.exports = RouterJi;
