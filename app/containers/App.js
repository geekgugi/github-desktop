import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
