import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AutoComplete from 'material-ui/AutoComplete';

import * as actions from '../actions/user';
import * as repo from '../actions/repo';
import { MAX_RESULTS, API_ERROR_MESSAGE } from '../constants.js';
import './user.scss';


const dataSourceConfig = {
  text: 'login',
  value: 'login'
};

const errorStyle = {
  'textAlign': 'center',
  'fontSize': '1em',
  'color': '#F44336'
};

export default class UserSuggest extends React.Component {

  constructor(props) {
    super(props);

  }

  handleUpdateInput(value) {
    this.props.userActions.userFetching(value);
  }

  fetchRepo(selectedUser, index) {
    //different user action cases
    if (index === -1 && this.props.items.length === 0) {
      this.props.userActions.usersNotFound();
    } else if (index === -1 && this.props.items.length !== 0){
      this.props.userActions.loadUser(selectedUser);
      this.props.repoActions.loadRepo(selectedUser);
    } else {
      this.props.userActions.userFound(selectedUser);
      this.props.repoActions.loadRepo(selectedUser.login);
    }
  }

  render() {
    const { items, userNotFound, apiError } = this.props;
    let errorNode = userNotFound ? 'User not found' : '';
    return (
      <div className='container'>
        { apiError ?
          <span className='error'>
              {API_ERROR_MESSAGE}
          </span>
          :
          <AutoComplete
            errorStyle={errorStyle}
            errorText= {errorNode}
            animated={true}
            hintText="Enter Github username to search"
            dataSource={items}
            maxSearchResults={MAX_RESULTS}
            dataSourceConfig={dataSourceConfig}
            onUpdateInput={this.handleUpdateInput.bind(this)}
            onNewRequest={this.fetchRepo.bind(this)}/>
        }
      </div>
    );
  }
}

UserSuggest.propTypes = {
  items: React.PropTypes.array,
  userNotFound: React.PropTypes.any,
  apiError: React.PropTypes.any,
  userActions: React.PropTypes.any,
  repoActions: React.PropTypes.any
};

const mapStateToProps = (state) => {
  return  {
    items: state.user.searchResult.items,
    userNotFound: state.user.notFound,
    apiError: state.user.apiError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(actions, dispatch),
    repoActions: bindActionCreators(repo, dispatch)
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(UserSuggest);
