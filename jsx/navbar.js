import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <ul>
            <li><NavLink to={'/'}>Current Weather</NavLink></li>
            <li><NavLink to={'/longterm'}>Longterm Weather</NavLink></li>
            <li><NavLink to={'/pollution'}>Air pollution</NavLink></li>
        </ul>
    )
};

export default NavigationBar;