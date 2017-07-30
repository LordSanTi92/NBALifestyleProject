import React from 'react';
import ReactDOM from 'react-dom';
import EastConference from './components/EastConference.jsx';
import WestConference from './components/WestConference.jsx';
import EastBar from './components/EastBar.jsx';
import WestBar from './components/WestBar.jsx';
import MiddleLine from './components/MiddleLine.jsx';
import MiddleCircle from './components/MiddleCircle.jsx';
import store from './redux/stores/store';


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
];

let eastConferenceTeams=['Atlanta Hawks',
'Boston Celtics',
'Brooklyn Nets',
'Charlotte Hornets',
'Chicago Bulls',
'Cleveland Cavaliers',
'Detroit Pistons',
'Indiana Pacers',
'Miami Heat',
'Milwaukee Bucks',
'New York Knicks',
'Orlando Magic',
'Philadelphia 76ers',
'Toronto Raptors',
'Washington Wizards'
]

class App extends React.Component{
  render(){
    return <div className='pitch'>
            <WestBar />
            <WestConference value={store.getState()} onPick={e=>store.dispatch({type:"PICKED",club:e})} westTeams={this.props.westTeams} />
            <MiddleLine />
            <MiddleCircle />
            <EastConference eastTeams={this.props.eastTeams} />
            <EastBar />
            </div>
  }
}

function render(){
ReactDOM.render(
  <App westTeams={westConferenceTeams} eastTeams={eastConferenceTeams}/>,
  document.getElementById('app')
)
}
render();
store.subscribe(render)

});
