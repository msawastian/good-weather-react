import React from 'react';

const DisplayForecastHour = ({clouds, main, weather, wind}) => {
    return (
        <div>
            <span>{main.temp.toFixed(2)}</span>
            <span>{main.pressure} hPa</span>
            <span>{main.humidity} %</span>
            <span>{clouds.all} %</span>
            <span>{weather[0].main}</span>
            <span>{weather[0].description}</span>
            <span>{wind.speed}</span>
        </div>

    )
};

export default DisplayForecastHour;