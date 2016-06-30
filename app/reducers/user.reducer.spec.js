import user from './user.js';
 import {
  apiError,
  clearNotFound,
  userFound
} from '../actions/user.js';

describe('Reducer: user', () => {
  it('should have a valid initial state', () => {
    const initialState = user(undefined, {});
    expect(initialState).to.deep.equal({});
  });

  it('should set api error flag', () => {
    const state = user(undefined, apiError(true));
    expect(state.apiError).to.deep.equal(true);
  });

  it('should set api error flag', () => {
    const state = user(undefined, apiError(false));
    expect(state.apiError).to.deep.equal(false);
  });

  it('should clear repo when not found', () => {
    var state = {
      'apiError': false,
      'notFound': true,
      'currentUser': '',
      'searchResult':{
        'items':[]
      }
    };
    const newState =user(state, clearNotFound());
    expect(newState.notFound).to.deep.equal(false);
  });

  it('should erase initial  user when new user found', () => {
    var state = {
      'apiError': false,
      'notFound': true,
      'currentUser': '',
      'searchResult':{
        'items':[]
      }
    };
    const newState =user(state, userFound({}));
    expect(newState.currentUser).to.deep.equal({});
  });

  it('should set found false when new user found', () => {
    var state = {
      'apiError': false,
      'notFound': true,
      'currentUser': '',
      'searchResult':{
        'items':[]
      }
    };
    const newState =user(state, userFound({}));
    expect(newState.notFound).to.equal(false);
  });


});
