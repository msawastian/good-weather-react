import React from 'react';
import { v4 as uuid} from 'uuid';
import DisplayForecastHour from './displayForecastHour';

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