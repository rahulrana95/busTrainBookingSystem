import React from 'react';
import { render } from 'react-dom';
import 'antd/lib/date-picker/style/css';        // for css
import routes from './routes';
import App from './components/App';


render(routes,document.getElementById("app"));

module.hot.accept();
