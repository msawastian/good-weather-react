import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';
import 'normalize.css';
import 'animate.css';
import '../scss/main.scss';
import Header from './header';
import NavigationBar from './navbar';
import LocationInput from './locationInput';
import DisplayCurrentWeather from "./displayCurrentWeather";
import DisplayForecast from './displayForecast';
import DisplayPollution from "./displayPollution";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            locationName: '',
            loading: true,
            weatherData: {},
            forecastData: [],
            airlyData: {},
        }
    }

    handleLocationInput = (event) => {
        this.setState({
            locationName: event.target.value
        });
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
                this.setState({
                    weatherData: data
                });
            this.getForecastData();
            this.getAirlyData(this.state.weatherData.coord.lat, this.state.weatherData.coord.lon);
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
                this.setState({
                    forecastData: data.list
                })
        }).catch(error => {
            console.log(error);
        })
    };

    getGeoLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.getCurrentWeatherDataFromCoordinates(Number(position.coords.latitude), Number(position.coords.longitude));
            }, (error) => {console.log(error)}
        )
    };

    getCurrentWeatherDataFromCoordinates = (latitude, longitude) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.props.apiKey}`)
            .then( response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to get weather data - check coordinates for errors.')
                }
            }).then( data => {
            this.setState({
                weatherData: data,
                locationName: data.name
            });
            this.getForecastDataFromCoordinates(latitude, longitude);
            this.getAirlyData(latitude, longitude);
        }).catch(error => {
            console.log(error);
        })
    };

    getForecastDataFromCoordinates = (latitude, longitude) => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.props.apiKey}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to get forecast data - check coordinates for errors.')
                }
            }).then(data => {
                this.setState({
                    forecastData: data.list
                })
        }).catch(error => {
            console.log(error);
        })
    };

    getAirlyData = (latitude, longitude) => {
        fetch(`https://airapi.airly.eu/v1/nearestSensor/measurements?latitude=${latitude}&longitude=${longitude}`,
            {method: 'GET', headers: {
                Accept: 'application/json',
                apikey: this.props.airlyKey
                }})
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to get Airly pollution data')
                }
            }).then(data => {
                this.setState({
                    airlyData: data,
                    loading: false
                })
        }).catch(error => {
            console.log(error)
        })
    };

    render() {
        return (
            <HashRouter>
                <main>
                    <Header/>
                    <NavigationBar/>
                    <LocationInput inputCallback={this.handleLocationInput}
                                   buttonCallback={this.getCurrentWeatherDataFromLocation}
                                   geoCallback={this.getGeoLocation}
                                   locationName={this.state.locationName}
                    />
                    <Switch>
                        <Route exact path={'/'}
                               render={(props) => this.state.loading ? <p className={'no-data'}>Awaiting input...</p> : <DisplayCurrentWeather {...props} weatherData={this.state.weatherData}/>}/>
                        <Route path={'/longterm'}
                               render={(props) => this.state.loading ? <p className={'no-data'}>Awaiting input...</p> : <DisplayForecast {...props} forecast={this.state.forecastData} location={this.state.locationName}/>}/>
                        <Route path={'/pollution'}
                               render={(props) => this.state.loading ? <p className={'no-data'}>Awaiting input...</p> : <DisplayPollution {...props} airlyData={this.state.airlyData}/>}/>
                    </Switch>
                </main>
            </HashRouter>
        )
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App apiKey={'1564f8b4dd2a1779efdc16350e54fe25'} airlyKey={'Z6ObIaiUCKIaZAYUbOXUvzzTjAi8Xl3j'}/>,
        document.getElementById('app')
    )
});