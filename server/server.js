require('./config/config.js');

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + './../'));

app.get('/api/weather/coordinates', (request, response) => {
    const latitude = request.query.latitude,
        longitude = request.query.longitude;

    let allData = {};

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=1564f8b4dd2a1779efdc16350e54fe25`)
        .then(response => {
            console.log('Weather fetch returned');
            if (response.ok) {
                console.log('Response ok');
                return response.json()
            } else {
                throw new Error('Unable to get weather data')
            }
        })
        .then(data => {
            console.log('Weather data received');
            allData = {
                weatherData: data
            };
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=1564f8b4dd2a1779efdc16350e54fe25`)
        })
        .then(response => {
            console.log('Forecast fetch returned');

            if (response.ok) {
                console.log('Response ok');
                return response.json()
            } else {
                throw new Error('Unable to get forecast data')
            }
        })
        .then(data => {
            console.log('Forecast data received');
            allData = {
                ...allData,
                forecastData: data.list
            };

            return fetch(`https://airapi.airly.eu/v1/nearestSensor/measurements?latitude=${latitude}&longitude=${longitude}`,
                {method: 'GET', headers: {
                        "Accept": "application/json",
                        "apikey": "Z6ObIaiUCKIaZAYUbOXUvzzTjAi8Xl3j"
                    }})
        })
        .then(response => {
            console.log('Airly fetch returned');

            if (response.ok) {
                console.log('Response ok');

                return response.json()
            } else {
                throw new Error('Unable to get Airly data')
            }
        })
        .then(data => {
            allData = {
                ...allData,
                airlyData: data
            };

            return fetch(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=eea290e2a3139bc62f0f2a8b6f39621b8394aa52`)
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Unable to get AQI data')
            }
        })
        .then(data => {

            allData = {
                ...allData,
                aqiData: data.data
            };

            response.send(allData)
        })
        .catch(error => response.send({error}))
});

app.get('/api/weather/location', (request, response) => {
    const locationName = encodeURIComponent(request.query.locationname);

    console.log(locationName);

    let allData = {},
        latitude,
        longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=1564f8b4dd2a1779efdc16350e54fe25`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Unable to get weather data')
            }
        })
        .then(data => {
            console.log('Weather OK');
            allData = {
                weatherData: data
            };
            latitude = data.coord.lat;
            longitude = data.coord.lon;

            console.log(latitude, longitude)

            return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${locationName}&units=metric&appid=1564f8b4dd2a1779efdc16350e54fe25`)
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Unable to get forecast data')
            }
        })
        .then(data => {
            console.log('Forecast OK');

            allData = {
                ...allData,
                forecastData: data
            };

            return fetch(`https://airapi.airly.eu/v1/nearestSensor/measurements?latitude=${latitude}&longitude=${longitude}`, {
                headers: {
                    Accept: 'application/json',
                    apikey: 'Z6ObIaiUCKIaZAYUbOXUvzzTjAi8Xl3j'
                }
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Unable to get Airly data')
            }
        })
        .then(data => {
            console.log('Airly OK');

            allData = {
                ...allData,
                airlyData: data
            };

            return fetch(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=eea290e2a3139bc62f0f2a8b6f39621b8394aa52`)
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Unable to get AQI data')
            }
        })
        .then(data => {
            console.log('AQI OK');

            allData = {
                ...allData,
                aqiData: data.data
            };

            response.send(allData)
        })
        .catch(error => response.send({error, desc: "Dupa"}))

});


app.listen(port);