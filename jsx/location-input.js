import React from 'react';

const LocationInput = props => {
    return (
        <div className={'location-container'}>
            <div className={'location-input'}>
                <input className={'location-input-input'} type={'text'} placeholder={'Show weather for:'} onChange={event => props.inputCallback(event)}></input>
                <button className={'location-input-button-search'} onClick={() => props.buttonCallback()}></button>
                {/*<button className={'location-input-button-search'} ></button>*/}
                <button className={'location-input-button-geolocation'} ></button>
            </div>
        </div>
    )
};

export default LocationInput;