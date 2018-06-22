import React from 'react';

const LocationInput = props => {
    return (
        <div className={'location-container'}>
            <div className={'location-input'}>
                <form className={'location-input-form'} onSubmit={(event) => props.buttonCallback(event)}>
                    <input className={'location-input-input'} type={'text'} placeholder={props.locationName ? props.locationName : 'Show weather for:'} onChange={event => props.inputCallback(event)}></input>
                    <button type='submit' className={'location-input-button-search'} onClick={(event) => props.buttonCallback(event)}></button>
                </form>
                <button className={'location-input-button-geolocation'} onClick={() => props.geoCallback()} ></button>
            </div>

        </div>
    )
};

export default LocationInput;