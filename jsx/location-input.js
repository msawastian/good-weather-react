import React from 'react';

const LocationInput = props => {
    return (
        <div>
            <label>Wprowadź miasto:
                <input type={'text'} onChange={event => props.inputCallback(event)}></input>
                <button onClick={() => props.buttonCallback()}>Zatwierdź</button>
            </label>
        </div>
    )
};

export default LocationInput;