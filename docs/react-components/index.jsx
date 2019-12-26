import React from 'react';
import ReactDOM from 'react-dom';

import './styles/base.scss';
import './styles/prism.css';

import Router from './router/index';

ReactDOM.render(
  <Router/>,
  document.getElementById('app')
);
