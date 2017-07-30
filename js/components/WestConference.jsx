import React from 'react';
import ReactDOM from 'react-dom';

require("../../sass/components/WestConference.scss")

class WestConference extends React.Component{
  constructor(props){
    super(props)
  }

  handleClick = e =>{
    this.props.onPick(e.target.dataset.name)
  }
  render(){
    console.log(this.props.value.pickedClub.club == "");
    if(this.props.value.pickedClub.club == ""){
    return <div className="westConference" >
              {this.props.westTeams.map((team,index)=>{
                return <div className="team" data-name={team} key={index} onClick={e=>this.handleClick(e)}></div>
              })}
          </div>
        }
      else {
        return <div className="westConference" >
                <p>{this.props.value.pickedClub.club}</p>
                </div>
      }
      }
  }

export default WestConference
