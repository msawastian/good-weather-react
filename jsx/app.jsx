import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';
import LocationInput from './location-input.jsx';
import WeatherDisplay from "./weather-display.jsx";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            locationName: '',
            loading: true,
            weatherData: {}
        }
    }

    handleLocationInput = (event) => {
        this.setState({
            locationName: event.target.value
        })
    };

    getWeatherDataFromLocation = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.locationName}&units=metric&appid=1564f8b4dd2a1779efdc16350e54fe25`)
            .then( response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Server error - 1st stage')
                }
            }).then( data => {
                console.log(data);
                this.setState({
                    loading: false,
                    weatherData: data
                })
        })
    };

    render() {
        return (
            <div>
            <h1>Hello World!</h1>
                <LocationInput inputCallback={this.handleLocationInput} buttonCallback={this.getWeatherDataFromLocation}/>
                {this.state.loading ? null : <WeatherDisplay weatherData={this.state.weatherData}/>}
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