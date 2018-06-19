import React from 'react';
import ReactDOM from 'react-dom';
import 'main.css';
import LocationInput from './location-input';
import DisplayCurrentWeather from "./display-current-weather";
import DisplayLongTermWeather from './display-long-term-weather';
import NavigationBar from './navbar';
import {
    HashRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';

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

    getCurrentWeatherDataFromLocation = () => {
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
                    sunrise: data.results.sunrise,
                    sunset: data.results.sunset
                })
        }).catch(error => {
            console.log(error);
        })
    };

    render() {
        return (
            <HashRouter>
                <main>
                    <NavigationBar/>
                    <LocationInput inputCallback={this.handleLocationInput} buttonCallback={this.getCurrentWeatherDataFromLocation}/>
                    <Switch>
                        <Route exact path={'/'} render={(props) => this.state.loading ? null : <DisplayCurrentWeather {...props} weatherData={this.state.weatherData} sunset={this.state.sunset} sunrise={this.state.sunrise}/>}/>
                        <Route path={'/longterm'} render={(props) => <DisplayLongTermWeather {...props}/>}/>
                    </Switch>
                </main>
            </HashRouter>
        )
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App apiKey={'1564f8b4dd2a1779efdc16350e54fe25'}/>,
        document.getElementById('app')
    )
});