import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './context/Provider';
import reducer, { initialState } from './context/Reducer';
import './index.css'

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);