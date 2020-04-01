import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index.js';

function App(props) {
  return (
    <Provider store={store}>
      tst
    </Provider>
  ); 
}

export default App;