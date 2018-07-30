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

                response.send(allData)
            })
            .catch(error => response.send(error))
});


app.listen(port);