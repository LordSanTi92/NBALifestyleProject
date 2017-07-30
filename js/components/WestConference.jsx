import React from 'react';
import ReactDOM from 'react-dom';
import Fade from 'react-fade';

require("../../sass/components/WestConference.scss")

class WestConference extends React.Component{
  constructor(props){
    super(props)
  }

  handleClick = e =>{
    console.log($(e.target).css('background-image'));
    this.props.onPick(e.target.dataset.name, $(e.target).css('background-image'))
  }

  render(){
    console.log(this.props.value.pickedClub);
    if(this.props.value.pickedClub.club == ""){
    return  <Fade>
            <div className="westConference" >
              {this.props.westTeams.map((team,index)=>{
                return <div className="team" data-name={team} key={index} onClick={e=>this.handleClick(e)}></div>
              })}
          </div>
          </Fade>

        }
      else {
        return  <Fade>
                  <div className="westConference">
                  <div style={{backgroundImage:this.props.value.pickedClub.logo}} className="oneTeam"></div>
                </div>
                </Fade>
      }
      }
  }

export default WestConference
