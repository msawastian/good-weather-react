import React from 'react';

const DisplayPollution = props => {
    return (
            <section className={'pollution-container'}>
                <div className={'pollution-top-row'}>
                    <div className={'pollution-logo'}>TEST</div>
                    <div className={'pollution-index-overall'}>{Math.round(props.airlyData.airQualityIndex)}</div>
                </div>
                <div className={'pollution-bottom-row'}>
                    <div className={'pollution-index-10'}>{Math.round(props.airlyData.pm10)} &#181;m/m3</div>
                    <div className={'pollution-index-25'}>{Math.round(props.airlyData.pm25)} &#181;m/m3</div>
                </div>
            </section>
    )
};


export default DisplayPollution;