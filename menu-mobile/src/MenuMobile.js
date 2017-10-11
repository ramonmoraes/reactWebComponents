import React, { Component } from 'react';
import './App.css';

import MenuContainer from './containers/MenuContainer';

class App extends Component {
  render() {
    return (
        <MenuContainer buttons={this.props.children}/>
      );
  }
}

export default App;
