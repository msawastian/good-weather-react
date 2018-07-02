import React from 'react';
import calculateWindDirection from "./calculateWindDirection";

const DisplayNightNextDay = props => {

    const nightWeather = props.forecastData.filter(forecast => {
        return forecast.dt_txt.slice(11,16) === '03:00';
    })[0];

    const nextDayWeather = props.forecastData.filter(forecast => {
        return forecast.dt_txt.slice(11,16) === '15:00'
    })[0];

    console.log(nightWeather);
    console.log(nextDayWeather);

    return (
        <div className={'night-next-day'}>
            <div className={'night-next-day__night'}>
                <div className={'night-next-day-header'}>Night</div>
                <div className={'night__image'} style={{backgroundImage: `url(http://openweathermap.org/img/w/${nightWeather.weather[0].icon}.png)`}}></div>
                <div className={'night-next-day__temp'}>{nightWeather.main.temp.toFixed(0)} &#8451;</div>
                <ul className={'night-next-day__list'}>
                    <li className={'night-next-day__list-element'}>
                        <span>Humidity</span>
                        <span>{nightWeather.main.humidity}%</span>
                    </li>
                    <li className={'night-next-day__list-element'}>
                        <span>Clouds</span>
                        <span>{nightWeather.clouds.all}%</span>
                    </li>
                    <li className={'night-next-day__list-element'}>
                        <span>Wind</span>
                        <span>{nightWeather.wind.speed} km/h</span>
                    </li>
                    <li className={'night-next-day__list-element'}>
                        <span>Wind direction</span>
                        <span>{calculateWindDirection(nightWeather.wind.deg)}</span>
                    </li>
                    <li className={'night-next-day__list-element'}>
                        <span>Precipitation</span>
                        <span>{nightWeather.precipitation ? nightWeather.precipitation.value : 'n/a'}</span>
                    </li>
                    <li className={'night-next-day__list-element'}>
                        <span>Pressure</span>
                        <span>{nightWeather.main.pressure} hPa</span>
                    </li>
                </ul>
            </div>
            <div className={'night-next-day__next-day'}>
                <div className={'night-next-day-header'}>Next day</div>
                <div className={'next-day__image'} style={{backgroundImage: `url(http://openweathermap.org/img/w/${nextDayWeather.weather[0].icon}.png)`}}></div>
                <div className={'night-next-day__temp'}>{nextDayWeather.main.temp.toFixed(0)} &#8451;</div>
                <ul className={'night-next-day__list'}>
                    <li className={'night-next-day__list-element'}>
                        <span>Humidity</span>
                        <span>{nextDayWeather.main.humidity}%</span>
                    </li>
                    <li className={'night-next-day__list-element'}>
                        <span>Clouds</span>
                        <span>{nextDayWeather.clouds.all}%</span>
                    </li>
                    <li className={'night-next-day__list-element'}>
                        <span>Wind</span>
                        <span>{nextDayWeather.wind.speed} km/h</span>
                    </li>
                    <li className={'night-next-day__list-element'}>
                        <span>Wind direction</span>
                        <span>{calculateWindDirection(nextDayWeather.wind.deg)}</span>
                    </li>
                    <li className={'night-next-day__list-element'}>
                        <span>Precipitation</span>
                        <span>{nextDayWeather.precipitation ? nextDayWeather.precipitation.value : 'n/a'}</span>
                    </li>
                    <li className={'night-next-day__list-element'}>
                        <span>Pressure</span>
                        <span>{nextDayWeather.main.pressure} hPa</span>
                    </li>
                </ul>
            </div>

        </div>
    )
};

export default DisplayNightNextDay;