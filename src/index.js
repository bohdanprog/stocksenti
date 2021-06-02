import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StockSenti from './App';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";

ReactDOM.render(
    <StockSenti />,
  document.getElementById('root')
);
serviceWorker.register();