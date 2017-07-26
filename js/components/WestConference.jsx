import React from 'react';
import ReactDOM from 'react-dom';
require("../../sass/components/WestConference.scss")

class WestConference extends React.Component{
  render(){
    return <div className="westConference">
              {this.props.westTeams.map((team,index)=>{
                return <div className="team" key={index}></div>
              })}
          </div>
  }
}

export default WestConference
