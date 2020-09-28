import React from 'react';
import Beer from './../beer/beer';
import './beers.css';


export default function Beers(props) {

    return(
        <div className = 'beers-container'>
             {props.beers.map(beer =>
                                <Beer
                                    key = {beer.id}
                                    id = {beer.id}
                                    name = {beer.name}
                                    image_url = {beer.image_url}
                                    tagline = {beer.tagline} isFavorite = {beer.isFavorite}
                                    favButtonOnClickHandler = {props.toggleFav}
                                    onSelectHandler = {props.onSelectHandler}
                                />
                            )
            }
        </div>
    );
}