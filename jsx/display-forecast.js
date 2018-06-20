import React from 'react';
import DisplayForecastHour from './display-forecast-hour';
import { v4 as uuid} from 'uuid';



const DisplayForecast = props => {
    return (
        <div className={'forecast-container'}>
            <ul className={'forecast-list'}>
                {props.forecast.map(weather => {
                    return (
                        <DisplayForecastHour key={uuid()} {...weather} />
                    )
                })}
            </ul>
        </div>
    )
};

export default DisplayForecast;