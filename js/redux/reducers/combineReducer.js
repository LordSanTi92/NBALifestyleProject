import givenClub from './givenClub'

export default function combineReducer(currentState, action){
  var nextState = Object.assign({},currentState);
    return{
      pickedClub: givenClub(nextState.pickedClub, action)
    }
}
