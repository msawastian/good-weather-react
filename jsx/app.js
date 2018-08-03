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
import Footer from './footer';
import DisplayForecast from './displayForecast';
import DisplayPollution from "./displayPollution";
import DisplayWeatherContainer from "./displayWeatherContainer";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            locationName: '',
            loading: true,
            weatherData: {},
            forecastData: [],
            airlyData: {},
            surroundingWeather: [],
            aqiData: {},
        }
    }

    handleLocationInput = (event) => {
        this.setState({
            locationName: event.target.value
        });
    };

    getGeoLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.getCurrentWeatherDataFromCoordinates(Number(position.coords.latitude), Number(position.coords.longitude));
            }, (error) => {console.log(error)}
        )
    };

    getCurrentWeatherDataFromLocation = (event) => {
        event.preventDefault();

        fetch(`/api/weather/location?locationname=${this.state.locationName}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to get response from server')
                }
            })
            .then(data => {
                this.setState({
                    weatherData: data.weatherData,
                    locationName: data.weatherData.name,
                    forecastData: data.forecastData,
                    airlyData: data.airlyData,
                    aqiData: data.aqiData,
                    loading: false
                });
            }).catch(error => {
            console.log(error);
        })
    };

    getCurrentWeatherDataFromCoordinates = (latitude, longitude) => {
        fetch(`/api/weather/coordinates?latitude=${latitude}&longitude=${longitude}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to get response from server')
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    weatherData: data.weatherData,
                    locationName: data.weatherData.name,
                    forecastData: data.forecastData,
                    airlyData: data.airlyData,
                    aqiData: data.aqiData,
                    loading: false
                });
            }).catch(error => console.log(error))
    };

    render() {
        return (
            <HashRouter>
                <main>
                    <Header/>
                    <div className={'headerNavigationContainer'}>
                            <NavigationBar/>
                            <LocationInput inputCallback={this.handleLocationInput}
                                           buttonCallback={this.getCurrentWeatherDataFromLocation}
                                           geoCallback={this.getGeoLocation}
                                           locationName={this.state.locationName}
                            />
                    </div>
                    <Switch>
                        <Route exact path={'/'}
                               render={(props) => this.state.loading ? <p className={'no-data'}>Awaiting input...</p> : <DisplayWeatherContainer {...props} weatherData={this.state.weatherData} forecastData={this.state.forecastData}/>}/>
                        <Route path={'/longterm'}
                               render={(props) => this.state.loading ? <p className={'no-data'}>Awaiting input...</p> : <DisplayForecast {...props} forecast={this.state.forecastData} location={this.state.locationName}/>}/>
                        <Route path={'/pollution'}
                               render={(props) => this.state.loading ? <p className={'no-data'}>Awaiting input...</p> : <DisplayPollution {...props} airlyData={this.state.airlyData} aqiData={this.state.aqiData}/>}/>
                    </Switch>
                    <Footer/>
                </main>
            </HashRouter>
        )
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});