import fetch from 'cross-fetch';

export const SEARCH_BEER = "SEARCH_BEER";
export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const TOGGLE_FAVORITE_BEER = "TOGGLE_FAVORITE_BEER";

export function searchBeer(searchText) {
    return {
        type: SEARCH_BEER,
        searchText
    }
}

export function toggleFavoriteBeer(id) {
    return {
        type: TOGGLE_FAVORITE_BEER,
        id
    }
}

function requestData() {
    return {
        type: REQUEST_DATA
    }
}
function receiveData(json) {
    return {
        type: RECEIVE_DATA,
        beersData: json.map(child => {return {...child, isFavorite: false}})
    }
}

function fetchData() {
    return dispatch => {
        dispatch(requestData());
        return fetch("https://api.punkapi.com/v2/beers")
            .then(response => response.json())
            .then(json => dispatch(receiveData(json)));
    }
}

function isDataAlreadyExist(state) {
    if(state.beersData.length === 0) {
        return false;
    }
    return true;
}

export function fetchIfNotExist() {
    return (dispatch, getState) => {
        if(!isDataAlreadyExist(getState())) {
            return dispatch(fetchData());
        }
    }
}
