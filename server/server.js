require('./config/config.js');

const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT;


app.use(express.static(__dirname + './../'));


app.get('/api/weather/coordinates', (request, response) => {
    const latitude = request.query.latitude,
        longitude = request.query.longitude;

    let allData = {};

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=1564f8b4dd2a1779efdc16350e54fe25`)
            .then(data => {
                allData = {
                    weatherData: data.data
                };
                return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=1564f8b4dd2a1779efdc16350e54fe25`)
            })
            .then(data => {
                allData = {
                    ...allData,
                    forecastData: data.data
                };

                return axios.get(`https://airapi.airly.eu/v1/nearestSensor/measurements?latitude=${latitude}&longitude=${longitude}`, {
                    headers: {
                        Accept: 'application/json',
                        apikey: 'Z6ObIaiUCKIaZAYUbOXUvzzTjAi8Xl3j'
                    }
                })
            })
            .then(data => {
                allData = {
                    ...allData,
                    airlyData: data.data
                };

                return axios.get(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=eea290e2a3139bc62f0f2a8b6f39621b8394aa52`)
            })
            .then(data => {
                allData = {
                    ...allData,
                    aqiData: data.data.data
                };

                response.send(allData)
            })
            .catch(error => response.send(error))
});


app.listen(port);