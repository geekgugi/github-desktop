import {
  REPO_LOADING,
  REPO_LOADED,
  NO_REPO_FOUND,
  CLEAR_REPOS
} from '../actions/repo.js';

export default function repos(state = [], action) {
  switch(action.type) {
    case CLEAR_REPOS:
      return [];
    case NO_REPO_FOUND:
      return state;
    case REPO_LOADING:
      return state;
    case REPO_LOADED:
      return action.repos;
    default:
      return state;
  }
}
