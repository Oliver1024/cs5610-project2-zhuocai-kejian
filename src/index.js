import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Panel from "components/Panel"
import Router from 'Router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './components/Store'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

