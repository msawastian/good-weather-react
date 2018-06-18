import React from 'react';

const WeatherDisplay = props => {
    const weather = props.weatherData;
    return (
        <div>
            <span>Miejscowość: {weather.name}</span>
            <span>Temp: {weather.main.temp} C</span>
            <span>Wilgotność: {weather.main.humidity} %</span>
            <span>Min temp: {weather.main.temp_min} C</span>
            <span>Max temp: {weather.main.temp_max} C</span>
            <span>Prędkość wiatru: {weather.wind.speed} km/h</span>
            <span>Zachmurzenie: {weather.clouds.all} %</span>
        </div>
    )
};

export default WeatherDisplay;