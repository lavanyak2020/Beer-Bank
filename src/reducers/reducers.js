import {
    SEARCH_BEER,
    TOGGLE_FAVORITE_BEER,
    REQUEST_DATA,
    RECEIVE_DATA,

}   from '../actions/actions';

export default function rootReducer(state = {searchText: "", isFetching: false, beersData: []}, action) {
    switch(action.type) {
        case TOGGLE_FAVORITE_BEER:
            return Object.assign({}, state,
                                    {beersData: state.beersData.map(beer =>
                                                                     beer.id === action.id ? {...beer, isFavorite: !beer.isFavorite} : beer
                                                                    )
                                    }
                                 );
        case REQUEST_DATA:
            return Object.assign({}, state, {isFetching: true});
        case RECEIVE_DATA:
            return Object.assign({}, state, {isFetching: false, beersData: action.beersData});
        case SEARCH_BEER:
            return Object.assign({}, state, {searchText: action.searchText});
        default:
            return state
    }
}
