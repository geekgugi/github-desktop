import React from 'react';
import { render } from 'react-dom';
import routes from './router';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { initStore } from './store';

let store = initStore({
  'user': {
    'apiError': false,
    'notFound': false,
    'currentUser': '',
    'searchResult':{
      'items':[]
    }
  },
  'repos': []
 });

render(
  <Provider store={store}>
    <Router routes={routes} history={hashHistory}/>
  </Provider>,
   document.getElementById('root')
 );
