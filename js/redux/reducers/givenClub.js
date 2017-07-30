export default function givenClub(state ={club:"",logo:""},action){
  switch (action.type){
    case "PICKED":
      return Object.assign({},state,
        {club:action.club,
          logo:action.logo
        });
      default:
      return state;
  }
}
