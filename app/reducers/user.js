import {
  USER_FOUND,
  USER_NOT_FOUND,
  USERS_FOUND,
  USERS_NOT_FOUND,
  USER_SEARCH_LOADING,
  API_ERROR,
  CLEAR_NOT_FOUND } from '../actions/user.js';

export default function user(state = {}, action) {
  switch(action.type) {
    case USER_SEARCH_LOADING:
      return Object.assign({}, state, { searchText : action.searchText });
    case USERS_FOUND:
      return Object.assign({}, state, { searchResult : action.users }, {notFound: false});
    case USERS_NOT_FOUND:
      return Object.assign({}, state, { searchResult : action.emptyList }, {notFound: true});
    case USER_FOUND:
      return Object.assign({}, state, {currentUser: action.user}, {notFound: false});
    case USER_NOT_FOUND:
      return Object.assign({}, state, {notFound: true});
    case API_ERROR:
      return Object.assign({}, state, {apiError: action.value});
    case CLEAR_NOT_FOUND:
      return Object.assign({}, state, {notFound: false});
    default:
      return state;
  }
}
