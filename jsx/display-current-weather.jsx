import React from 'react';
import getTime from './getTime';

const DisplayCurrentWeather = props => {
    const weather = props.weatherData;
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>{getTime()}</span>
            <span>Miejscowość: {weather.name}</span>
            <span>Temp: {weather.main.temp} C</span>
            <span>Min temp: {weather.main.temp_min} C</span>
            <span>Max temp: {weather.main.temp_max} C</span>
            <span>Wilgotność: {weather.main.humidity} %</span>
            <span>Prędkość wiatru: {weather.wind.speed} km/h</span>
            <span>Zachmurzenie: {weather.clouds.all} %</span>
        </div>
    )
};

export default DisplayCurrentWeather;