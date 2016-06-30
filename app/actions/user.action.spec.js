import { expect } from 'chai';

import { USER_FOUND,
  USER_NOT_FOUND,
  CLEAR_NOT_FOUND,
  API_ERROR,
  USERS_FOUND,
  USERS_NOT_FOUND,
  usersNotFound,
  usersFound,
  userNotFound,
  userFound,
  apiError,
  clearNotFound
} from './user';


describe('user search api error', () => {
  it('should return an action object', () => {
    var test = {
      type:API_ERROR,
      value: []
    };
    expect(apiError([])).to.deep.equal(test);
  });
});

describe('user clear not found', () => {
  it('should return an action object', () => {
    var test = {
      type:CLEAR_NOT_FOUND
    };
    expect(clearNotFound()).to.deep.equal(test);
  });
});

describe('user found', () => {
  it('should return an action object', () => {
    var testObject = {
      type:USER_FOUND,
      user: {
        id:123
      }
    };
    expect(userFound({id:123})).to.deep.equal(testObject);
  });
});

describe('user not found', () => {
  it('should return an action object', () => {
    var testObject = {
      type:USER_NOT_FOUND,
      user: []
    };
    expect(userNotFound([])).to.deep.equal(testObject);
  });
});


describe('users found', () => {
  it('should return an action object', () => {
    var testObject = {
      type:USERS_FOUND,
      users: []
    };
    expect(usersFound([])).to.deep.equal(testObject);
  });
});

describe('users not found', () => {
  it('should return an action object', () => {
    var testObject = {
      type:USERS_NOT_FOUND,
      emptyList: []
    };
    expect(usersNotFound([])).to.deep.equal(testObject);
  });
});
