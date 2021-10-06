export function addAddress(data){
  return {
    type: "ADD_ITEM",
    payload: data,
  };
}

export function setInitialData(data){
  return {
    type: "SET_INITIAL_DATA",
    payload: data,
  };
}

export function setFilteredData(data){
  return {
    type: "SET_FILTERED_DATA",
    payload: data,
  };
}

export function setFilteringStatus(data){
  return {
    type: "SET_FILTERE_STATUS",
    payload: data,
  };
}

export function deleteAddress(data){
  return {
    type: "DELETE_ADDRESS",
    payload: data,
  };
}

export function setAppLoadingStatus(data){
  return {
    type: "SET_APP_LOADING_STATUS",
    payload: data,
  };
}