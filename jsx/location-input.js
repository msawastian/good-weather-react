import React from 'react';

const LocationInput = props => {
    return (
        <div className={'location-input'}>
            <label className={'location-input-label'}>Wprowadź miasto:
                <input className={'location-input-input'} type={'text'} onChange={event => props.inputCallback(event)}></input>
            </label>
            <button className={'location-input-button'} onClick={() => props.buttonCallback()}>Zatwierdź</button>
        </div>
    )
};

export default LocationInput;