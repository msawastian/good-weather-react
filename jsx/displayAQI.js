import React from 'react';

const Displaypollution = props => {

    const aqiDescription = index => {
        if (index >= 0 && index <= 50) {
            return 'Good'
        } else if (index > 50 && index <= 100) {
            return 'Moderate'
        } else if (index > 100 && index <= 150) {
            return 'Unhealthy for sensitive groups'
        } else if (index > 150 && index <= 200){
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

    return (
        <div>
            <div className={'aqi-container animated fadeInUp'}>
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
                            <span className={'pollution-item-value'} style={pm10Color(props.aqiData.iaqi.co.v.toFixed(0))}>{props.aqiData.iaqi.co.v.toFixed(0)} &#181;m/m3</span>
                            : <span className={'pollution-item-value'} style={{backgroundColor: '#6c9ae2'}}>NO DATA</span>}
                    </li>
                    <li className={'pollution-list-element'}>
                        <span className={'pollution-item'}>NO2</span>
                        {props.aqiData.iaqi.no2 ?
                            <span className={'pollution-item-value'} style={pm25Color(props.aqiData.iaqi.no2.v.toFixed(0))}>{props.aqiData.iaqi.no2.v.toFixed(0)} &#181;m/m3</span>
                            : <span className={'pollution-item-value'} style={{backgroundColor: '#6c9ae2'}}>NO DATA</span>}
                    </li>
                    <li className={'pollution-list-element'}>
                        <span className={'pollution-item'}>SO2</span>
                        {props.aqiData.iaqi.so2 ?
                            <span className={'pollution-item-value'} style={pm25Color(props.aqiData.iaqi.so2.v.toFixed(0))}>{props.aqiData.iaqi.so2.v.toFixed(0)} &#181;m/m3</span>
                            : <span className={'pollution-item-value'} style={{backgroundColor: '#6c9ae2'}}>NO DATA</span>}
                    </li>
                    <li className={'pollution-list-element'}>
                        <span className={'pollution-item'}>O3</span>
                        {props.aqiData.iaqi.o3 ?
                            <span className={'pollution-item-value'} style={pm25Color(props.aqiData.iaqi.o3.v.toFixed(0))}>{props.aqiData.iaqi.o3.v.toFixed(0)} &#181;m/m3</span>
                            : <span className={'pollution-item-value'} style={{backgroundColor: '#6c9ae2'}}>NO DATA</span>}
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Displaypollution;