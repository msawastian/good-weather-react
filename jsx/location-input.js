import React from 'react';

const LocationInput = props => {
    return (
        <div className={'location-container'}>
            <form className={'location-input'} onSubmit={(event) => props.buttonCallback(event)}>
                <input className={'location-input-input'} type={'text'} placeholder={'Show weather for:'} onChange={event => props.inputCallback(event)}></input>
                <button type='submit' className={'location-input-button-search'} onClick={(event) => props.buttonCallback(event)}></button>
                <button className={'location-input-button-geolocation'} ></button>
            </form>
        </div>
    )
};

export default LocationInput;