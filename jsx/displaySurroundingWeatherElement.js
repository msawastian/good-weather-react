import React from 'react';

const DisplaySurroundingWeatherElement = ({clouds, main, name, weather}) => {
    return (
        <li className={'surroundingWeather-list-element'}>
            <div className={'surroundingWeather-name'}>{name}</div>
            <div className={'surroundingWeather-list-icon'} style={{backgroundImage: `url(http://openweathermap.org/img/w/${weather[0].icon}.png)`}}></div>
            <div className={'surroundingWeather-main'}>
                <span className={'surroundingWeather-main-temp'}>{main.temp.toFixed(0)}<span className={'surroundingWeather-deg-celsius'}> &#8451;</span></span>
            </div>
        </li>
    )
};

export default DisplaySurroundingWeatherElement;