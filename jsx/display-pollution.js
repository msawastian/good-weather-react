import React from 'react';

const DisplayPollution = props => {
    return (
            <section className={'pollution-container'}>
                <div className={'pollution-row'}>
                    <div className={'pollution-description'}>
                        <p className={'pollution-description-text'}></p>
                    </div>
                    <div className={'pollution-index'}>
                        <div className={'pollution-index-value'}></div>
                    </div>
                </div>
                <ul className={'pollution-list'}>
                    <li className={'pollution-list-element'}>
                        <span className={'pollution-item'}></span>
                        <span className={'pollution-item-value'}></span>
                    </li>
                    <li>
                        <span className={'pollution-item'}></span>
                        <span className={'pollution-item-value'}></span>
                    </li>
                </ul>
            </section>
    )
};


export default DisplayPollution;

/*
{Math.round(props.airlyData.airQualityIndex)}
{Math.round(props.airlyData.pm10)
{Math.round(props.airlyData.pm25)
&#181;m/m3
 */