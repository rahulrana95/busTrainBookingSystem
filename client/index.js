import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import RouterJi from './routes';
import App from './components/App';

render( <RouterJi />,document.getElementById("app"));


if (module.hot){
   module.hot.accept();
   console.log('module hot.........');

}
