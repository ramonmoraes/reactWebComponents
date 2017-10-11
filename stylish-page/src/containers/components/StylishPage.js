import React, { Component } from 'react';

class StylishPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      hidden:this.props.hidden,
      place:this.props.place
    }
  }
  isHidden =()=> {
    let position;
    (this.state.hidden) ? position="-120%" : position="0%";
    return position
  }

  toggle =(arg)=> {
    let bol;
    (arg) ? bol=false : bol=true ;
    return bol;
  }

  handleHidden =()=> {
    this.setState({
      hidden: this.toggle(this.state.hidden)
    })
  }

  setSlide =(arg)=> {
    let newArg = arg;
    newArg[this.state.place] = this.isHidden();
    return newArg
  }
  render() {
    let style={
      "backgroundImage":this.props.image,
      "backgroundColor":this.props.backgroundColor,
      "color":this.props.color
    };
    let style2=this.setSlide(style);
    console.log(style2);
    return (
      <div className='stylishPage' style={style2}>
        <h1> {this.props.header} </h1>
        <button onClick={this.handleHidden}>oi </button>
        <p> oi </p>
        <p> {this.props.paragraph} </p>
        <a href={this.props.link}> {this.props.link} </a>
      </div>
    );
  }
}

export default StylishPage;
