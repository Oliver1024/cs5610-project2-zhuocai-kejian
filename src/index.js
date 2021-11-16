import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Panel from "components/Panel"
import Router from 'Router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './components/Store'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <Router />
    </DndProvider>
  </Provider>,
  document.getElementById('root')
);

