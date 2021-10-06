export default function repositoryReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return addItem(state, action);
    }
    case "SET_INITIAL_DATA": {
      return {...state, addresses:action.payload};
    }
     case "SET_FILTERE_STATUS": {
      return {...state, filterStatus:action.payload};
    }
     case "SET_FILTERED_DATA": {
      return {...state, filteredAddress:action.payload};
    }
      case "DELETE_ADDRESS": {
      return {...state, addresses:action.payload};
    }
    case "SET_APP_LOADING_STATUS":{
      return {...state, appLoaded:action.payload};
    }

    default:
      return state;
  }
}



function addItem(state, action){
    console.log("action",action);
  return { ...state,addresses:action.payload};
}



;