import React from 'react';

const DisplayPollution = props => {

    const aqiDescription = index => {
        if (index >= 0 && index <= 25) {
            return 'Very Low'
        } else if (index > 25 && index <= 50) {
            return 'Low'
        } else if (index > 50 && index <= 75) {
            return 'Medium'
        } else if (index > 75 && index <= 100){
            return 'High'
        } else if (index > 100){
            return 'Very High'
        }
    };

    const aqiColor = index => {
        if (index >= 0 && index <= 25) {
            return {backgroundColor: '#79bc6a'}
        } else if (index > 25 && index <= 50) {
            return {backgroundColor: '#bbcf4c'}
        } else if (index > 50 && index <= 75) {
            return {backgroundColor: '#eec20b'}
        } else if (index > 75 && index <= 100){
            return {backgroundColor: '#f29305'}
        } else if (index > 100){
            return {backgroundColor: '#960018', color: 'white'}
        }
    };

    const pm10Color = index => {
        if (index >= 0 && index <= 25) {
            return {backgroundColor: '#79bc6a'}
        } else if (index > 25 && index <= 50) {
            return {backgroundColor: '#bbcf4c'}
        } else if (index > 50 && index <= 90) {
            return {backgroundColor: '#eec20b'}
        } else if (index > 75 && index <= 180){
            return {backgroundColor: '#f29305'}
        } else if (index > 180){
            return {backgroundColor: '#960018', color: 'white'}
        }
    };

    const pm25Color = index => {
        if (index >= 0 && index <= 15) {
            return {backgroundColor: '#79bc6a'}
        } else if (index > 15 && index <= 30) {
            return {backgroundColor: '#bbcf4c'}
        } else if (index > 30 && index <= 55) {
            return {backgroundColor: '#eec20b'}
        } else if (index > 55 && index <= 110){
            return {backgroundColor: '#f29305'}
        } else if (index > 110){
            return {backgroundColor: '#960018', color: 'white'}
        }
    };

    if (props.airlyData.pollutionLevel) {
        return (
            <section className={'pollution-container'}>
                <div className={'airly-logo'}></div>
                <ul className={'pollution-list'}>
                    <li className={'pollution-list-element'}>
                        <div className={'pollution-item'}>CAQI</div>
                        <div className={'pollution-item-value'} style={aqiColor(props.airlyData.airQualityIndex.toFixed(0))}>
                            <div className={'pollution-item-value-number'}>{props.airlyData.airQualityIndex.toFixed(0)}</div>
                            <div className={'pollution-item-value-desc'}>{aqiDescription(props.airlyData.airQualityIndex.toFixed(0))}</div>
                        </div>
                    </li>
                    <li className={'pollution-list-element'}>
                        <span className={'pollution-item'}>PM10</span>
                        {props.airlyData.pm10 ?
                            <span className={'pollution-item-value'} style={pm10Color(props.airlyData.pm10.toFixed(0))}>{props.airlyData.pm10.toFixed(0)} &#181;m/m3</span>
                            : <span className={'pollution-item-value'} style={{backgroundColor: '#6c9ae2'}}>NO DATA</span>}
                    </li>
                    <li className={'pollution-list-element'}>
                        <span className={'pollution-item'}>PM2.5</span>
                        {props.airlyData.pm25 ?
                            <span className={'pollution-item-value'} style={pm25Color(props.airlyData.pm25.toFixed(0))}>{props.airlyData.pm25.toFixed(0)} &#181;m/m3</span>
                            : <span className={'pollution-item-value'} style={{backgroundColor: '#6c9ae2'}}>NO DATA</span>}
                    </li>
                </ul>
            </section>
        )
    } else {
        return (
            <section className={'pollution-container'}>
                <div className={'airly-logo'}></div>
                <ul className={'pollution-list'}>
                    <li className={'pollution-list-element'} style={{backgroundColor: '#6c9ae2'}}>
                        <div className={'pollution-item'}>CAQI</div>
                        <div className={'pollution-item-value'}>
                            <div className={'pollution-item-value-number'}>NO DATA</div>
                            <div className={'pollution-item-value-desc'}>NO DATA</div>
                        </div>
                    </li>
                    <li className={'pollution-list-element'} style={{backgroundColor: '#6c9ae2'}}>
                        <span className={'pollution-item'}>PM10</span>
                        <span className={'pollution-item-value'}>NO DATA</span>
                    </li>
                    <li className={'pollution-list-element'} style={{backgroundColor: '#6c9ae2'}}>
                        <span className={'pollution-item'}>PM2.5</span>
                        <span className={'pollution-item-value'}>NO DATA</span>
                    </li>
                </ul>
            </section>
        )
    }

};


export default DisplayPollution;

/*
{Math.round(props.airlyData.airQualityIndex)}
{Math.round(props.airlyData.pm10)
{Math.round(props.airlyData.pm25)
&#181;m/m3
 */