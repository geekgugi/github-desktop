import { expect } from 'chai';

import * as repo from './repo';


describe('Actions Creators: Repo', () => {

  it('should return an action object', () => {
    var test = {
        type: repo.REPO_LOADED,
        repos : []
    };
    expect(repo.repoLoaded([])).to.deep.equal(test);
  });

  it('should return an action object', () => {
    var test = {
        type: repo.REPO_LOADING
    };
    expect(repo.repoLoading()).to.deep.equal(test);
  });

  it('should return an action object', () => {
    var test = {
        type: repo.NO_REPO_FOUND
    };
    expect(repo.noRepos()).to.deep.equal(test);
  });
});
