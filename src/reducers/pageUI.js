import immutable from 'immutable';

import {
  Test,
} from '../constants/pageUI.js';

let defaultState = immutable.fromJS({ test: '' });

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case Test: {
      return state.set('test', immutable.fromJS(action.payload));
    }
    default: {
      return state;
    }
  }
}