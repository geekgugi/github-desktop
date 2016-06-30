import { createStore , compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const initStore = (initialState) => createStore(reducer, initialState, enhancer);

module.exports = {
  initStore
};
