import React from 'react';
import DisplayForecastHour from './display-forecast-hour';
import { v4 as uuid} from 'uuid';



const DisplayForecast = props => {
    return (
        <div>
            <div>{props.location}</div>
            <ul>
                {props.forecast.map(weather => {
                    return (
                        <li key={uuid()}><DisplayForecastHour {...weather}/></li>
                    )
                })}
            </ul>
        </div>
    )
};

export default DisplayForecast;