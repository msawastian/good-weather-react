import React from 'react';
import DisplayCurrentWeather from './displayCurrentWeather';
import DisplayNightNextDay from './displayNightNextDay';


const DisplayWeatherContainer = props => {
    return (
        <div className={'weather-container'}>
            <DisplayCurrentWeather weatherData={props.weatherData}/>
            <DisplayNightNextDay forecastData={props.forecastData}/>
        </div>
        )
};

export default DisplayWeatherContainer;