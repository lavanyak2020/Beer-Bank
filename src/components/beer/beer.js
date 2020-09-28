import React from 'react';

import fav from './../../assets/favorite.png';
import not_fav from './../../assets/not-favorite.png';
import './beer.css';

export default function Beer(props) {
    const favoriteIcon = props.isFavorite ? fav: not_fav;

    return (
        <div className = 'beer-container'>
            <span className = 'fav-button' onClick = {() => props.favButtonOnClickHandler(props.id)}>
                <img src = {favoriteIcon} alt = 'fav-button' width = '20px' height = '20px'/>
            </span>
            <div className = 'beer-details' onClick = {() => props.onSelectHandler(props.id)}>
                <div className = 'beer-image-container'>
                    <span className = 'beer-image'>
                        <img src = {props.image_url} width = '60' height = '180' alt = {props.name} />
                    </span>
                </div>
                <div className = 'beer-name'>
                    {props.name}
                </div>
                <div className = 'beer-tagline'>
                    {props.tagline}
                </div>
            </div>
        </div>
    );
}