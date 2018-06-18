import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';
import LocationInput from './location-input.jsx';


class App extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello World!</h1>
                <LocationInput/>
            </div>

        )
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});