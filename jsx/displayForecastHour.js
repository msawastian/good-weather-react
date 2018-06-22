import React from 'react';

const DisplayForecastHour = ({clouds, dt, dt_txt, main, rain, weather, wind}) => {
        const date = new Date(dt * 1000).toLocaleDateString().slice(0,5);

        return (
        <li className={'forecast-list-element animated fadeInUp'}>
            <div className={'forecast-list-element-time'}>
                <span className={'forecast-element-time-hour'}>{dt_txt.slice(11, 16)}</span>
                <span className={'forecast-element-time-date'}>{date}</span>
            </div>
            <div className={'forecast-list-icon'} style={{backgroundImage: `url(http://openweathermap.org/img/w/${weather[0].icon}.png)`}}></div>
            <div className={'forecast-main'}>
                <span className={'forecast-main-temp'}>{main.temp.toFixed(0)}<span className={'forecast-deg-celsius'}> &#8451;</span></span>
                <span className={'forecast-main-desc'}>{weather[0].description}</span>
            </div>
            <ul className={'forecast-list-secondary'}>
                <li className={'forecast-list-secondary-element'}>
                    <span>Wind</span>
                    <span>{wind.speed.toFixed(1)} km/h</span>
                </li>
                <li className={'forecast-list-secondary-element'}>
                    <span>Clouds</span>
                    <span>{clouds.all}%</span>
                </li>
                <li className={'forecast-list-secondary-element'}>
                    <span>Precipitation</span>
                    <span>{(rain && rain['3h']) ? `${rain['3h'].toFixed(2)} mm/m2` : 'n/a'}</span>
                </li>
            </ul>
        </li>

    )
};

export default DisplayForecastHour;