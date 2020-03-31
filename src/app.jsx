import React from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import store from './store/index.js';
// pages
import Login from './pages/login/login';

function App(props) {
  return (
    <Provider store={store}>
      test
    </Provider>
  ); 
}

export default App;