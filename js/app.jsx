import React from 'react';
import ReactDOM from 'react-dom';
import EastConference from './components/EastConference.jsx'
import WestConference from './components/WestConference.jsx'
require("../sass/style.scss")
document.addEventListener('DOMContentLoaded',()=>{


class App extends React.Component{
  render(){
    return <div>
            <WestConference />
            <EastConference />
            </div>
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)

});
