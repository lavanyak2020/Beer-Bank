import React from 'react';

import './popUp.css';

export default function PopUp(props) {
    function handler(event) {
        event.stopPropagation();
    }
    return (
        <div className = 'popup-container' onClick = {()=>props.onSelectHandler(props.beer.id)}>
            <div className = 'popup' onClick = {handler}>
                <div className = 'popup-cancel-button' onClick = {()=>props.onSelectHandler(props.beer.id)}>
                    X
                </div>
                <div className = 'popup-beer-details'>
                    <div className = 'popup-beer-image'>
                        <img src = {props.beer.image_url} alt = {props.beer.name}  width = '80%' height = '90%'/>
                    </div>
                    <div className = 'popup-beer-data'>
                        <div className = 'popup-beer-name'>
                            {props.beer.name}
                        </div>
                        <div className = 'popup-beer-tagline'>
                            {props.beer.tagline}
                        </div>
                        <div className = 'popup-line'>
                        </div>
                        <div className = 'popup-beer-values'>
                            <div className = 'beer-ibu'><strong>IBU:</strong>{props.beer.ibu}</div>
                            <div className = 'beer-abv'><strong>ABV:</strong>{props.beer.abv}%</div>
                            <div className = 'beer-ebc'><strong>EBC:</strong>{props.beer.ebc}</div>
                        </div>
                        <div className = 'popup-beer-description'>
                            {props.beer.description}
                        </div>
                        <div className = 'popup-beer-served-with'>
                            <div className = 'popup-served-with-heading'>
                                <strong>Best Served With:</strong>
                            </div>
                            <ul>
                                {props.beer.food_pairing.map((food)=> <li>{food}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className = 'similar-items'>
                    <h1>You might also like:</h1>
                    <div className = 'similar-items-container'>
                        <div className = 'item'>
                            <img src = {props.similarProducts[0].image_url} alt ={props.similarProducts[0].name} width = '50%' height ='80%'/>
                            <span> {props.similarProducts[0].name}</span>
                        </div>
                        <div className = 'item'>
                            <img src = {props.similarProducts[1].image_url} alt ={props.similarProducts[1].name} width = '50%' height ='80%'/>
                            <span> {props.similarProducts[1].name}</span>
                        </div>
                        <div className = 'item'>
                            <img src = {props.similarProducts[2].image_url} alt ={props.similarProducts[2].name} width = '50%' height ='80%'/>
                            <span> {props.similarProducts[2].name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}