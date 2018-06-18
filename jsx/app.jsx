import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';
import LocationInput from './location-input.jsx';
import DisplayCurrentWeather from "./display-current-weather.jsx";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            locationName: '',
            loading: true,
            weatherData: {},
            sunrise: '',
            sunset: ''
        }
    }

    handleLocationInput = (event) => {
        this.setState({
            locationName: event.target.value
        })
    };

    getWeatherDataFromLocation = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.locationName}&units=metric&appid=${this.props.apiKey}`)
            .then( response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to get weather data - check city name for errors.')
                }
            }).then( data => {
                this.setState({
                    weatherData: data
                });
            this.getSunriseSunset(this.state.weatherData.coord.lat, this.state.weatherData.coord.lon);
        }).catch(error => {
            console.log(error);
        })
    };

    getSunriseSunset = (latitude, longitude) => {
        fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to get sunrise/sunset data - check latitude and longitude.')
                }
            }).then(data => {
                this.setState({
                    loading: false,
                    sunrise: data.results.sunrise, //TODO: Convert time from AM/PM to 24h format
                    sunset: data.results.sunset
                })
        }).catch(error => {
            console.log(error);
        })
    };

    render() {
        return (
            <div>
                <LocationInput inputCallback={this.handleLocationInput} buttonCallback={this.getWeatherDataFromLocation}/>
                {this.state.loading ? null : <DisplayCurrentWeather
                    weatherData={this.state.weatherData} sunset={this.state.sunset} sunrise={this.state.sunrise}/>}
            </div>

        )
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App apiKey={'1564f8b4dd2a1779efdc16350e54fe25'}/>,
        document.getElementById('app')
    )
});