import React from 'react';
import DisplayForecastDay from "./display-forecast-day";

const DisplayForecast = props => {
    return (
        <div>
            <DisplayForecastDay/>
            <DisplayForecastDay/>
            <DisplayForecastDay/>
        </div>
    )
};

export default DisplayForecast;