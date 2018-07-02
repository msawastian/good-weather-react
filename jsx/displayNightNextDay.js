import React from 'react';

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
        <div>TEST</div>
    )
};

export default DisplayNightNextDay;