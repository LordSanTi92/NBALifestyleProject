import React from 'react';
import ReactDOM from 'react-dom';
import EastConference from './components/EastConference.jsx';
import WestConference from './components/WestConference.jsx';
import EastBar from './components/EastBar.jsx';
import WestBar from './components/WestBar.jsx';
import MiddleLine from './components/MiddleLine.jsx';
import MiddleCircle from './components/MiddleCircle.jsx';



require("../sass/style.scss")
document.addEventListener('DOMContentLoaded',()=>{
let westConferenceTeams=['Dallas Mavericks',
'Denver Nuggets',
'Golden State Warriors',
'Houston Rockets',
'Los Angeles Clippers',
'Los Angeles Lakers',
'Memphis Grizzlies',
'Minnesota Timberwolves',
'New Orleans Pelicans',
'Oklahoma City Thunder',
'Phoenix Suns',
'Portland Trail Blazers',
'Sacramento Kings',
'San Antonio Spurs',
'Utah Jazz'
]

class App extends React.Component{
  render(){
    return <div className='pitch'>
            <EastBar />
            <EastConference />
            <MiddleLine />
            <MiddleCircle />
            <WestConference westTeams={this.props.westTeams} />
            <WestBar />
            </div>
  }
}


ReactDOM.render(
  <App westTeams={westConferenceTeams}/>,
  document.getElementById('app')
)

});
