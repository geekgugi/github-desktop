import { searchUser, fetchUser } from '../services/UserSearchService.js';
import { clearRepo } from './repo.js';

export const USERS_NOT_FOUND = 'USERS_NOT_FOUND';
export const USER_NOT_FOUND = 'USER_NOT_FOUND';
export const USER_FOUND = 'USER_FOUND';
export const USERS_FOUND = 'USERS_FOUND';
export const USER_SEARCH_LOADING = 'USER_SEARCH_LOADING';
export const API_ERROR = 'API_ERROR';
export const CLEAR_NOT_FOUND = 'CLEAR_NOT_FOUND';


export function apiError(value) {
  return {
    type: API_ERROR,
    value
  };
}

export function clearNotFound() {
  return {
    type: CLEAR_NOT_FOUND
  };
}

export function userFound(user) {
  return {
    type: USER_FOUND,
    user
  };
}

export function userNotFound(user) {
  return {
    type: USER_NOT_FOUND,
    user
  };
}

export function usersNotFound(emptyList) {
  return {
    type: USERS_NOT_FOUND,
    emptyList
  };
}

export function usersFound(users) {
  return {
    type: USERS_FOUND,
    users
  };
}

export function userLoading(searchText) {
  return {
    type: USER_SEARCH_LOADING,
    searchText
  };
}

export function loadUser(username) {
  return (dispatch) => {
    dispatch(clearRepo());
    dispatch(userLoading(username));
    fetchUser(username).then((result) => {
      if (result.message  && result.message === 'Not Found') {
        dispatch(userNotFound(result));
      } else {
        dispatch(userFound(result));
      }
    }).catch(() => {
      setTimeout(() => {
        dispatch(clearNotFound());
        dispatch(clearRepo());
        dispatch(apiError(false));
      }, 6000);
      dispatch(apiError(true));
    });
  };
}

export function userFetching(searchText) {
  return (dispatch) => {
    dispatch(clearRepo());
    dispatch(userLoading(searchText));
    searchUser(searchText).then((result) => {
      if (result.total_count === 0 && result.items.length === 0) {
        dispatch(usersNotFound(result));
      } else {
        dispatch(usersFound(result));
      }

    }).catch(() => {
      setTimeout(() => {
        dispatch(clearNotFound());
        dispatch(clearRepo());
        dispatch(apiError(false));
      }, 6000);
      dispatch(apiError(true));
    });
  };
}
