import React from 'react';
import ReactDOM from 'react-dom';
require("../../sass/components/EastConference.scss")

class EastConference extends React.Component{
  render(){
    return <div className="eastConference">
              {this.props.eastTeams.map((team,index)=>{
                return <div className="team" key={index}></div>
              })}
          </div>
  }
}


export default EastConference
