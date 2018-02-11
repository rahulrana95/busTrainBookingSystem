import React from 'react';
import { Provider } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
const routes =
    /*<Provider>*/
        <Router history={browserHistory}>
            <Route path="/" component={App}>

            </Route>
        </Router>
/*</Provider>*/;



module.exports = routes;