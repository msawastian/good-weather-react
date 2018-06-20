import React from 'react';
import getTime from './getTime';
import offsetTimezone from './offsetTimezone';

const DisplayCurrentWeather = props => {
    const weather = props.weatherData,
        weatherIcon = '!',
        dateOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    },
        date = new Date().toLocaleDateString('en-GB', dateOptions);

    console.log();
    return (
        <div className={'weather'}>
            <div className={'weather-row-left'}>
                <ul className={'weather-row-left-list'}>
                    <li className={'weather-row-left-list-element weather-icon'}>{weatherIcon}</li>
                    <li className={'weather-row-left-list-element weather-date'}>{date}</li>
                    <li className={'weather-row-left-list-element weather-time'}>{getTime()}</li>
                    <li className={'weather-row-left-list-element weather-description'}>{weather.weather[0].description}</li>
                    <li className={'weather-row-left-list-element weather-temp'}>{weather.main.temp.toFixed(0)}</li>
                </ul>
            </div>
            <div className={'weather-row-right'}>
                <ul className={'weather-row-right-list'}>
                    <li className={'weather-row-right-list-element'}>
                        <span>Sunrise</span>
                        <span>{offsetTimezone(props.sunrise)}</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Sunset</span>
                        <span>{offsetTimezone(props.sunset)}</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Humidity</span>
                        <span>{weather.main.humidity} %</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Clouds</span>
                        <span>{weather.clouds.all} %</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Wind</span>
                        <span>{weather.wind.speed} km/h</span>
                    </li>
                    <li className={'weather-row-right-list-element'}>
                        <span>Wind direction</span>
                        <span>{weather.wind.deg}</span>
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