require('./config/config.js');

const express = require('express');
const fetch = require('node-fetch');

const {getDataFromCoordinates} = require('./functions/getDataFromCoordinates');
const {getDataFromLocationName} = require('./functions/getDataFromLocationName');
const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + './../'));

app.get('/api/weather/coordinates', (request, response) => {
    const latitude = request.query.latitude,
        longitude = request.query.longitude;

    let allData = {};

    getDataFromCoordinates(latitude, longitude, allData)
         .then(outputData => {
             allData = {
                 ...outputData
             };
             response.send(allData)
         })
        .catch(error => {
            response.send({
                error,
                description: 'Failed to get data'
            })
        })

});

app.get('/api/weather/location', (request, response) => {
    const locationName = encodeURIComponent(request.query.locationname);

    let allData = {};

    getDataFromLocationName(locationName, allData)
        .then(outputData => {
            allData = {
                ...outputData
            };
            response.send(allData)
        })
        .catch(error => {
            response.send({
                error,
                description: 'Failed to get data'
            })
        })



});


app.listen(port);