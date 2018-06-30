import React from 'react';

const DisplayAQI = props => {

    const aqiDescription = index => {
        if (index >= 0 && index <= 50) {
            return 'Good'
        } else if (index > 50 && index <= 100) {
            return 'Moderate'
        } else if (index > 100 && index <= 200) {
            return 'Unhealthy'
        } else if (index > 200 && index <= 300) {
            return 'Very Unhealthy'
        } else if (index > 300) {
            return 'Hazardous'
        }
    };

    const aqiColor = index => {
        if (index >= 0 && index <= 50) {
            return {backgroundColor: '#79bc6a'}
        } else if (index > 50 && index <= 100) {
            return {backgroundColor: '#bbcf4c'}
        } else if (index > 100 && index <= 150) {
            return {backgroundColor: '#eec20b'}
        } else if (index > 150 && index <= 200){
            return {backgroundColor: '#f29305'}
        } else if (index > 200 && index <= 300){
            return {backgroundColor: '#960018', color: 'white'}
        } else if (index > 300) {
            return {backgroundColor: '#7e0023'}
        }
    };

    const o3Color = index => {
        if (index >= 0 && index <= 80) {
            return {backgroundColor: '#79bc6a'}
        } else if (index > 80 && index <= 120) {
            return {backgroundColor: '#bbcf4c'}
        } else if (index > 120 && index <= 150) {
            return {backgroundColor: '#eec20b'}
        } else if (index > 150 && index <= 180){
            return {backgroundColor: '#f29305'}
        } else if (index > 180){
            return {backgroundColor: '#960018', color: 'white'}
        }
    };

    const coColor = index => {
        if (index >= 0 && index <= 500) {
            return {backgroundColor: '#79bc6a'}
        } else if (index > 500 && index <= 1200) {
            return {backgroundColor: '#bbcf4c'}
        } else if (index > 1200 && index <= 2300) {
            return {backgroundColor: '#eec20b'}
        } else if (index > 2300 && index <= 3300){
            return {backgroundColor: '#f29305'}
        } else if (index > 3000){
            return {backgroundColor: '#960018', color: 'white'}
        }
    };

    const no2Color = index => {
        if (index >= 0 && index <= 2) {
            return {backgroundColor: '#79bc6a'}
        } else if (index > 2 && index <= 12) {
            return {backgroundColor: '#bbcf4c'}
        } else if (index > 12 && index <= 20) {
            return {backgroundColor: '#eec20b'}
        } else if (index > 20 && index <= 80){
            return {backgroundColor: '#f29305'}
        } else if (index > 80){
            return {backgroundColor: '#960018', color: 'white'}
        }
    };

    const so2Color = index => {
        if (index >= 0 && index <= 4) {
            return {backgroundColor: '#79bc6a'}
        } else if (index > 4 && index <= 20) {
            return {backgroundColor: '#bbcf4c'}
        } else if (index > 20 && index <= 75) {
            return {backgroundColor: '#eec20b'}
        } else if (index > 75 && index <= 150){
            return {backgroundColor: '#f29305'}
        } else if (index > 150){
            return {backgroundColor: '#960018', color: 'white'}
        }
    };

    if (props.aqiData) {
        return (
            <div className={'aqi-container'}>
                <div className={'aqi-logo'}></div>
                <ul className={'pollution-list'}>
                    <li className={'pollution-list-element'}>
                        <div className={'pollution-item'}>AQI</div>
                        <div className={'pollution-item-value'} style={aqiColor(props.aqiData.aqi)}>
                            <div className={'pollution-item-value-number'}>{props.aqiData.aqi.toFixed(0)}</div>
                            <div className={'pollution-item-value-desc'}>{aqiDescription(props.aqiData.aqi.toFixed(0))}</div>
                        </div>
                    </li>
                    <li className={'pollution-list-element'}>
                        <span className={'pollution-item'}>CO</span>
                        {props.aqiData.iaqi.co ?
                            <span className={'pollution-item-value'} style={coColor(props.aqiData.iaqi.co.v * 100)}>{(props.aqiData.iaqi.co.v.toFixed(2) * 100).toFixed(0)} &#181;m/m3</span>
                            : <span className={'pollution-item-value'} style={{backgroundColor: '#6c9ae2'}}>NO DATA</span>}
                    </li>
                    <li className={'pollution-list-element'}>
                        <span className={'pollution-item'}>NO2</span>
                        {props.aqiData.iaqi.no2 ?
                            <span className={'pollution-item-value'} style={no2Color(props.aqiData.iaqi.no2.v.toFixed(0))}>{props.aqiData.iaqi.no2.v.toFixed(0)} &#181;m/m3</span>
                            : <span className={'pollution-item-value'} style={{backgroundColor: '#6c9ae2'}}>NO DATA</span>}
                    </li>
                    <li className={'pollution-list-element'}>
                        <span className={'pollution-item'}>SO2</span>
                        {props.aqiData.iaqi.so2 ?
                            <span className={'pollution-item-value'} style={so2Color(props.aqiData.iaqi.so2.v.toFixed(0))}>{props.aqiData.iaqi.so2.v.toFixed(0)} &#181;m/m3</span>
                            : <span className={'pollution-item-value'} style={{backgroundColor: '#6c9ae2'}}>NO DATA</span>}
                    </li>
                    <li className={'pollution-list-element'}>
                        <span className={'pollution-item'}>O3</span>
                        {props.aqiData.iaqi.o3 ?
                            <span className={'pollution-item-value'} style={o3Color(props.aqiData.iaqi.o3.v.toFixed(0))}>{props.aqiData.iaqi.o3.v.toFixed(0)} &#181;m/m3</span>
                            : <span className={'pollution-item-value'} style={{backgroundColor: '#6c9ae2'}}>NO DATA</span>}
                    </li>
                </ul>
            </div>
        )
    } else {
        return null;
    }

};

export default DisplayAQI;