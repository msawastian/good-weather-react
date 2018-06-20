import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className={'navigation-container'}>
            <ul className={'navigation-bar'}>
                <li className={'navigation-bar-element'}><NavLink className={'navigation-bar-navlink'} exact to={'/'} activeStyle={{borderBottom: '3px solid purple'}}>Weather</NavLink></li>
                <li className={'navigation-bar-element'}><NavLink className={'navigation-bar-navlink'} to={'/longterm'} activeStyle={{borderBottom: '3px solid purple'}}>Forecast</NavLink></li>
                <li className={'navigation-bar-element'}><NavLink className={'navigation-bar-navlink'} to={'/pollution'} activeStyle={{borderBottom: '3px solid purple'}}>Air Pollution</NavLink></li>
            </ul>
        </div>
    )
};

export default NavigationBar;