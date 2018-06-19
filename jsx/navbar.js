import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <ul className={'navigation-bar'}>
            <li className={'navigation-bar-element'}><NavLink className={'navigation-bar-navlink'} to={'/'}>Current Weather</NavLink></li>
            <li className={'navigation-bar-element'}><NavLink className={'navigation-bar-navlink'} to={'/longterm'}>Longterm Weather</NavLink></li>
        </ul>
    )
};

export default NavigationBar;