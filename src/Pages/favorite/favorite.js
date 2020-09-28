import React from 'react';
import {connect} from 'react-redux';

import {searchBeer, toggleFavoriteBeer} from '../../actions/actions';
import Header from '../../components/header/header';
import Beers from '../../components/beers/beers';
import './favorite.css';

function Favorite(props) {

    function onChangeHandler(event) {
        props.dispatch(searchBeer(event.target.value));
    }

    function toggleFav(beer_id) {
        props.dispatch(toggleFavoriteBeer(beer_id));
    }
    return(
        <div className = 'favorite-container'>
            <Header searchText = {props.searchText} onChangeHandler = {onChangeHandler} />
            <Beers beers = {props.beers} toggleFav = {toggleFav}/>
        </div>
    );
}

function mapStateToProps(state) {
    const searchText = state.searchText;
    const beers = state.beersData.filter(beer => beer.isFavorite);
    return {searchText, beers};
}

export default connect(mapStateToProps) (Favorite);
