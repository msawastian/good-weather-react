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
            retryCounter: 0
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
                console.log(data);
                this.setState({
                    weatherData: data.weatherData,
                    locationName: data.weatherData.name,
                    forecastData: data.forecastData.list,
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
                    forecastData: data.forecastData.list,
                    airlyData: data.airlyData,
                    aqiData: data.aqiData,
                    loading: false
                });
            }).catch(error => console.log(error))
    };

    // getCurrentWeatherDataFromLocation = (event) => {
    //     event.preventDefault();
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.locationName}&units=metric&appid=${this.props.apiKey}`)
    //         .then( response => {
    //             if (response.ok) {
    //                 return response.json()
    //             } else {
    //                 throw new Error('Failed to get weather data - check city name for errors.')
    //             }
    //         }).then( data => {
    //             this.setState({
    //                 weatherData: data
    //             });
    //         this.getForecastData();
    //         this.getAirlyData(this.state.weatherData.coord.lat, this.state.weatherData.coord.lon);
    //         this.getAQICNData(this.state.weatherData.coord.lat, this.state.weatherData.coord.lon);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // };

    // getForecastData = () => {
    //     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.locationName}&units=metric&appid=${this.props.apiKey}`)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json()
    //             } else {
    //                 throw new Error('Failed to get forecast data')
    //             }
    //         }).then(data => {
    //             this.setState({
    //                 forecastData: data.list
    //             })
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // };





    // getCurrentWeatherDataFromCoordinates = (latitude, longitude) => {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.props.apiKey}`)
    //         .then( response => {
    //             if (response.ok) {
    //                 return response.json()
    //             } else {
    //                 throw new Error('Failed to get weather data - check coordinates for errors.')
    //             }
    //         }).then( data => {
    //         this.setState({
    //             weatherData: data,
    //             locationName: data.name
    //         });
    //         this.getForecastDataFromCoordinates(latitude, longitude);
    //         this.getAirlyData(latitude, longitude);
    //         this.getAQICNData(latitude, longitude);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // };

    // getForecastDataFromCoordinates = (latitude, longitude) => {
    //     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.props.apiKey}`)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json()
    //             } else {
    //                 throw new Error('Failed to get forecast data - check coordinates for errors.')
    //             }
    //         }).then(data => {
    //             this.setState({
    //                 forecastData: data.list
    //             })
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // };

    // getAirlyData = (latitude, longitude) => {
    //     fetch(`https://airapi.airly.eu/v1/nearestSensor/measurements?latitude=${latitude}&longitude=${longitude}`,
    //         {method: 'GET', headers: {
    //             Accept: 'application/json',
    //             apikey: this.props.airlyKey
    //             }})
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json()
    //             } else {
    //                 throw new Error('Failed to get Airly pollution data')
    //             }
    //         }).then(data => {
    //             this.setState({
    //                 airlyData: data
    //             })
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // };

    // getAQICNData = (latitude, longitude) => {
    //     fetch(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${this.props.aqicnKey}`)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json();
    //             } else {
    //                 throw new Error('Failed to get AQICN data');
    //             }
    //         }).then(data => {
    //             console.log(data);
    //             if (this.state.retryCounter > 1) {
    //                 this.setState({
    //                     retryCounter: 0
    //                 });
    //                 throw new Error('Exceeded retry limit');
    //             } else if (data.data) {
    //                 this.setState({
    //                     aqiData: data.data,
    //                     loading: false,
    //                     retryCounter: 0
    //                 })
    //             } else {
    //                 this.setState({
    //                     retryCounter: this.state.retryCounter +1
    //                 });
    //                 this.getAQICNData(latitude, longitude);
    //             }
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // };

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