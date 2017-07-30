import React from 'react';
import ReactDOM from 'react-dom';
require("../../sass/components/WestBar.scss")

class WestBar extends React.Component{
  render(){
    return <div className="westBar">
            <p>{this.props.value.pickedClub.club}</p>
          </div>
  }
}

export default WestBar
