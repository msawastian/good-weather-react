require('./config/config.js');

const express = require('express');
const app = express();
const port = process.env.PORT;


app.use(express.static(__dirname + './../'));


app.get('/api/weather/', (request, response) => {
    const locationName = request.body.locationName,
        latitude = request.body.latitude,
        longitude = request.body.longitude;

    response.send({
        locationName,
        latitude,
        longitude
    })
});


app.listen(port);