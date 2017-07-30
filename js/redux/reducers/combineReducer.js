import givenClub from './givenClub';
import back from './back'

export default function combineReducer(currentState, action){
  var nextState = Object.assign({},currentState);
    return{
      pickedClub: givenClub(nextState.pickedClub, action)
    }
}
