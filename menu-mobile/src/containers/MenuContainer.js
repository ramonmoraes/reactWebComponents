import React, { Component } from 'react';
import MenuAnimationContainer from './MenuAnimationContainer'
class MenuContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      hideMenu:false,
      hideContainer:false
    }
  }

  handleHide =()=>{
    let bol;
    (this.state.hideMenu) ? bol=false : bol=true ;
    this.setState({
      hideMenu:bol
    });
    setTimeout(()=>{
      this.hideContainer(bol);
    },300);
  }

  hideContainer=(bol)=>{
    this.setState({hideContainer:bol});
  }

  render() {

    return (
      <MenuAnimationContainer
        hideContainer={this.state.hideContainer}
        hideMenu={this.state.hideMenu}
        handleHide={this.handleHide}
        buttons={this.props.buttons}
      />
    );
  }
}

export default MenuContainer;
