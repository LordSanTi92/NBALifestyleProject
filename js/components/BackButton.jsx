import React from 'react';
import ReactDOM from 'react-dom';
require("../../sass/components/BackButton.scss")

class BackButton extends React.Component{
  handleClick = () =>{
    this.props.toDefault();
  }
  render(){
    return <button className="BackButton" onClick={this.handleClick}>Back
          </button>
  }
}


export default BackButton
