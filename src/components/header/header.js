import React from 'react';
import {Link} from 'react-router-dom';

import './header.css'

export default function Header(props) {

    return(
        <div className = 'header'>
            <div className = 'nav-bar'>
                <Link to = '/' style = {{textDecoration: 'none', color: 'white', padding: '8px'}}>Home</Link>
                <Link to = '/favorite' style = {{textDecoration: 'none', color: 'white', padding: '8px'}}>Favorite</Link>
            </div>
            <div className = 'title'>
                The Beer Bank
            </div>
            <div className = 'tag-line'>
                Find your favorite beer here
            </div>
            <div className = 'search-bar'>
                <input
                    type = 'text'
                    value = {props.searchText}
                    onChange = {props.onChangeHandler}
                    placeholder = 'Search for beer name'
                />
            </div>
        </div>
    );
}