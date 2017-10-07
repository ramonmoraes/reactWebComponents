import React, { Component } from 'react';
import ListOfButtons from './components/ListOfButtons'
class MenuAnimationContainer extends Component {

  render() {
    let style={display:'flex'};
    let blurStyle = {
      backgroundColor: "rgba(111,111,111,0.4)"
    };

    if(this.props.hideContainer)
      style.display='none';
    if(this.props.hideMenu)
      blurStyle.backgroundColor= "rgba(111,111,111,0)";

    return (
        <nav className='menuContainer' style={style}>
        <ListOfButtons hideMenu={this.props.hideMenu} handleHide={this.props.handleHide} >
          <button> button 1</button>
          <button> button 2</button>
          <button> button 3</button>
        </ListOfButtons>
        <div className='blur' style={blurStyle}></div>
      </nav>

    );
  }
}

export default MenuAnimationContainer;
