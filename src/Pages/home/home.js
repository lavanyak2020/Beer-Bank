import React from 'react';
import {connect} from 'react-redux';

import {searchBeer, toggleFavoriteBeer, fetchIfNotExist} from '../../actions/actions';
import Header from '../../components/header/header';
import Beers from '../../components/beers/beers';
import PopUp from '../../components/popUp/popUp';
import './home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.toggleFav = this.toggleFav.bind(this);
        this.onSelectHandler = this.onSelectHandler.bind(this);
        this.state = {popUp : {shouldDisplay: false, beer: {}}};
    }

    componentDidMount() {
        this.props.dispatch(fetchIfNotExist());
    }

    onChangeHandler(event) {
        this.props.dispatch(searchBeer(event.target.value));
    }

    toggleFav(beer_id) {
        this.props.dispatch(toggleFavoriteBeer(beer_id));
    }

    onSelectHandler(beer_id) {
        this.setState({
            popUp: !this.state.popUp.shouldDisplay ?
                                    {shouldDisplay: true, beer: this.props.beers[beer_id - 1]}
                                    : {shouldDisplay: false, beer: {}}
                                    });

    }

    getBeersByName(name) {
        return this.props.beers.filter((beer) =>
            beer.name.toLowerCase().startsWith(name.toLowerCase()))
    }

    render() {
        const displayBeers = this.props.searchText ? this.getBeersByName(this.props.searchText): this.props.beers;
        return(
            <div className = 'home-container'>
                <Header searchText = {this.props.searchText} onChangeHandler = {this.onChangeHandler} />
                <Beers beers = {displayBeers} toggleFav = {this.toggleFav} onSelectHandler = {this.onSelectHandler} />
                {
                    this.state.popUp.shouldDisplay
                    &&
                    <PopUp
                        beer = {this.state.popUp.beer}
                        onSelectHandler = {this.onSelectHandler}
                        similarProducts = { [this.props.beers[0], this.props.beers[1], this.props.beers[2]] }
                    />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const searchText = state.searchText;
    const beers = state.beersData;
    const isFetching = state.isFetching;
    console.log(beers.length);
    return {searchText, beers, isFetching};
}

export default connect(mapStateToProps) (Home);