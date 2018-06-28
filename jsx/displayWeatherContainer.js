import React from 'react';
import DisplayCurrentWeather from "./displayCurrentWeather";
import DisplaySurroundingWeather from "./displaySurroundingWeather";


const DisplayWeatherContainer = props => {
    return (
        <div className={'weather-container'}>
            <DisplayCurrentWeather weatherData={props.weatherData}/>
            <DisplaySurroundingWeather surroundingWeather={props.surroundingWeather} getWeather={props.getWeather}/>
        </div>
        )
};

export default DisplayWeatherContainer;