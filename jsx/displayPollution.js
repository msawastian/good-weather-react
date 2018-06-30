import React from 'react';
import DisplayAirly from './displayAirly';
import DisplayAQI from './displayAQI';

const DisplayPollution = props => {
    return (
        <section  className={'pollution-container animated fadeInUp'}>
            <DisplayAirly airlyData={props.airlyData}/>
            <DisplayAQI aqiData={props.aqiData}/>
        </section>
    )
};

export default DisplayPollution;