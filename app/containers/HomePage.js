import React, { Component } from 'react';

import RepoList from '../Components/RepoList';
import UserSuggest from '../Components/Usersuggest';


export default class HomePage extends Component {

  render() {
    return (
      <div>
          <UserSuggest/>
          <RepoList></RepoList>
      </div>
    );
  }
}
