import React from 'react';
import { v4 as uuid} from 'uuid';
import DisplaySurroundingWeatherElement from './displaySurroundingWeatherElement';

const DisplaySurroundingWeather = props => {
    return (
    <div className={'surround-container animated fadeInUp'}>
        <ul className={'surround-list'}>
            {props.surroundingWeather.map((location, index) => {
                if (index > 7) { //first 7 are often too close, believe me: i've checked at least 3 locations!
                    return (
                        <DisplaySurroundingWeatherElement key={uuid()} {...location} />
                    )
                }
            })}
        </ul>
    </div>
    )
};

export default DisplaySurroundingWeather;