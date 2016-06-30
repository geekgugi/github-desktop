import repos from './repos.js';
 import {
  clearRepo,
  repoLoading,
  repoLoaded,
  noRepos
} from '../actions/repo.js';

describe('Reducer: repos', () => {
  it('should have a valid initial state', () => {
    const initialState = repos(undefined, {});
    expect(initialState).to.deep.equal([]);
  });

  it('should clear repo when clear repo fired', () => {
    const state = repos(undefined, clearRepo());
    expect(state).to.deep.equal([]);
  });

  it('should not update repo while loading', () => {
    const initialState = repos(undefined, {});
    const state = repos(undefined, repoLoading());
    expect(initialState).to.deep.equal(state);
  });

  it('should load new results erasing old', () => {
    const initialState = repos(undefined, {});
    const state = repos(undefined, repoLoaded(['test']));
    expect(initialState).to.deep.not.equal(state);
  });

  it('should retain old state', () => {
    const initialState = repos(undefined, {});
    const state = repos(undefined, noRepos(['test']));
    expect(initialState).to.deep.equal(state);
  });
});
