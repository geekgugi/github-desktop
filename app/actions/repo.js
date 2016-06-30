import { fetchReposService } from '../services/RepoFetchService.js';
import { clearNotFound,  apiError } from './user.js';

export const REPO_LOADING = 'REPO_LOADING';
export const REPO_LOADED = 'REPO_LOADED';
export const REPO_ERROR = 'REPO_ERROR';
export const NO_REPO_FOUND = 'NO_REPO_FOUND';
export const CLEAR_REPOS = 'CLEAR_REPOS';

export function repoLoading() {
  return {
    type: REPO_LOADING
  };
}

export function clearRepo() {
  return {
    type: CLEAR_REPOS
  };
}

export function repoLoaded(repos) {
  return {
    type: REPO_LOADED,
    repos
  };
}


export function noRepos() {
  return {
    type: NO_REPO_FOUND
  };
}

export function loadRepo(username) {
  return (dispatch) => {
    // clear any further left repos
    dispatch(clearRepo());
    dispatch(repoLoading);
    fetchReposService(username)
      .then((result) => {
        if (result.length === 0) {
          dispatch(noRepos());
        } else {
          dispatch(repoLoaded(result));
        }
      })
      .catch(() => {
        setTimeout(() => {
          dispatch(clearNotFound());
          dispatch(clearRepo());
          dispatch(apiError(false));
        }, 6000);
        dispatch(apiError(true));
      });
  };
}
