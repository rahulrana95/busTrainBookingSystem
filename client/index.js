import React from 'react';
import { render } from 'react-dom';
import 'antd/lib/date-picker/style/css';        // for css
import { Router, Route, browserHistory } from 'react-router';
import RouterJi from './routes';
import App from './components/App';

render( <RouterJi />,document.getElementById("app"));


if (module.hot){
   module.hot.accept();
   console.log('module hot.........');

}
