import React from 'react';

const DisplayPollution = props => {
    return (
            <section className={'pollution-container'}>
                <div className={'pollution-top-row'}>
                    <div className={'pollution-logo'}></div>
                    <div className={'pollution-index-overall'}>
                        <div className={'pollution-index-overall-value'}>{Math.round(props.airlyData.airQualityIndex)}</div>
                        <div className={'pollution-index-pm-value-unit'}>INDEX</div>
                    </div>
                </div>
                <div className={'pollution-bottom-row'}>
                    <div className={'pollution-index-pm'}>
                        <div className={'pollution-index-pm-value'}>{Math.round(props.airlyData.pm10)}
                            <div className={'pollution-index-pm-value-unit'}>&#181;m/m3 PM10</div>
                        </div>
                    </div>
                    <div className={'pollution-index-pm'}>
                        <div className={'pollution-index-pm-value'}>{Math.round(props.airlyData.pm25)}
                            <div className={'pollution-index-pm-value-unit'}>&#181;m/m3 PM2.5</div>
                        </div>
                    </div>
                </div>
            </section>
    )
};


export default DisplayPollution;