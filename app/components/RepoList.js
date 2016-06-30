import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

import './RepoList.scss';

const itemStyle = {
  'backgroundColor': '#ffffff',
  'color': 'black',
  'margintTop': '7px',
  'height': '60px',
  'boxSizing': 'border-box',
  'width': '100%'
};


export default class RepoList extends Component {
  render () {
    const {repoList, apiError} = this.props;
    return (
      <div className='list-container'>
        {apiError ? '':
          <List>
          <Subheader>Repository List</Subheader>
          { repoList.length === 0 ?
            <span>  No repository found </span> :
            repoList.map((item, key) =>{
              return (
                  <div key={key} className='item'>
                  <ListItem style={itemStyle}
                      leftAvatar={<Avatar src={item.owner.avatar_url} />}
                      primaryText={<div><span className='item-name'>{item.name}</span>
                              <span className='item-link'>{item.html_url}</span>
                              </div>}/>
                  <Divider inset={true} />
                  </div>
                );
            })
          }
        </List>
      }

  </div>
    );
  }
}


RepoList.propTypes = {
  repoList: React.PropTypes.array,
  apiError: React.PropTypes.any
};

const mapStateToProps = (state) => {
  return  {
    repoList: state.repos,
    apiError: state.user.apiError
  };
};


module.exports = connect(mapStateToProps)(RepoList);
