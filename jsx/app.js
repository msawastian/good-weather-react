import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import '../scss/main.scss';
import LocationInput from './location-input';
import DisplayCurrentWeather from "./display-current-weather";
import DisplayForecast from './display-forecast';
import NavigationBar from './navbar';
import Header from './header';
import search from '../images/search.svg';
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
            sunset: '',
            forecastData: []
        }
    }

    handleLocationInput = (event) => {
        this.setState({
            locationName: event.target.value
        })
    };

    getCurrentWeatherDataFromLocation = (event) => {
        event.preventDefault();
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.locationName}&units=metric&appid=${this.props.apiKey}`)
            .then( response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to get weather data - check city name for errors.')
                }
            }).then( data => {
                console.log(data);
                this.setState({
                    weatherData: data
                });
            this.getSunriseSunset(this.state.weatherData.coord.lat, this.state.weatherData.coord.lon);
            this.getForecastData()
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

    getForecastData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.locationName}&units=metric&appid=${this.props.apiKey}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to get forecast data')
                }
            }).then(data => {
                console.log(data);
                this.setState({
                    forecastData: data.list
                })
        }).catch(error => {
            console.log(error);
        })
    };

    render() {
        return (
            <HashRouter>
                <main>
                    <Header/>
                    <NavigationBar/>
                    <LocationInput inputCallback={this.handleLocationInput} buttonCallback={this.getCurrentWeatherDataFromLocation}/>
                    <Switch>
                        <Route exact path={'/'} render={(props) => this.state.loading ? <h1>Awaiting input...</h1> : <DisplayCurrentWeather {...props} weatherData={this.state.weatherData} sunset={this.state.sunset} sunrise={this.state.sunrise}/>}/>
                        <Route path={'/longterm'} render={(props) => this.state.loading ? <h1>Awaiting input...</h1> : <DisplayForecast {...props} forecast={this.state.forecastData} location={this.state.locationName}/>}/>
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