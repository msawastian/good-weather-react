import React from 'react';
import getTime from './getTime';
import calculateWindDirection from './calculateWindDirection';

const DisplayCurrentWeather = props => {
    const weather = props.weatherData,
        dateOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    },
        date = new Date().toLocaleDateString('en-GB', dateOptions),
        sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString(),
        sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

    return (
        <div className={'weather'}>
            <div className={'weather-row-left'}>
                <ul className={'weather-row-left-list'}>
                    <li className={'weather-row-left-list-element weather-icon'} style={{backgroundImage: `url(http://openweathermap.org/img/w/${weather.weather[0].icon}.png)`}}></li>
                    <li className={'weather-row-left-list-element weather-temp'}>{weather.main.temp.toFixed(0)} &#8451;</li>
                    <li className={'weather-row-left-list-element weather-date'}>{date}</li>
                    <li className={'weather-row-left-list-element weather-time'}>{getTime()}</li>
                    <li className={'weather-row-left-list-element weather-description'}>{weather.weather[0].description}</li>
                </ul>
            </div>
            <div className={'weather-row-right'}>
                <ul className={'weather-row-right-list'}>
                    <li className={'weather-row-right-list-element'}>
                        <span>Sunrise</span>
                        <span>{sunrise}</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Sunset</span>
                        <span>{sunset}</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Humidity</span>
                        <span>{weather.main.humidity}%</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Clouds</span>
                        <span>{weather.clouds.all}%</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Wind</span>
                        <span>{weather.wind.speed} km/h</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Wind direction</span>
                        <span>{calculateWindDirection(weather.wind.deg)}</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Visibility</span>
                        <span>{weather.visibility} m</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Precipitation</span>
                        <span>{weather.precipitation ? weather.precipitation.value : 'n/a'}</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Pressure</span>
                        <span>{weather.main.pressure} hPa</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default DisplayCurrentWeather;