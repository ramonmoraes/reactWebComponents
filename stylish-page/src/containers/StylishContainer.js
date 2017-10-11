import React, { Component } from 'react';
import Page from './components/StylishPage';

class StylishContainer extends Component {
  render() {
    return (
      <div className='stylishContainer'>
        <Page hidden={false}
         place="left"
         backgroundColor="#333"
         color="#ddd"
         />
      </div>
    );
  }
}

export default StylishContainer;
