import React from 'react';
import ReactDOM from 'react-dom';
require("../../sass/components/EastBar.scss")

class EastBar extends React.Component{
  render(){
    return <div className="eastBar">
              <p>{this.props.value.pickedClub.club}</p>
          </div>
  }
}


export default EastBar
