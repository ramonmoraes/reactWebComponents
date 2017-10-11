import React, { Component } from 'react';

class ListOfButtons extends Component {
  handleHide=()=>{
    this.props.handleHide()
  }

  render() {
    let listOfButtons = [];
    this.props.children.map( (buttons)=>{
      return listOfButtons.push(buttons)
    });

    let style={
      left:'0vw'
    };
    (this.props.hideMenu) ? style.left='-73vw' : style.left='0vw';

    return (
      <div className='listOfButtons' style={style}>
        {listOfButtons}
        <button onClick={this.handleHide}> Hide </button>
      </div>
    );
  }
}

export default ListOfButtons;
