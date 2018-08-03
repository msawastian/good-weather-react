const fetch = require('node-fetch');

const getWeatherDataFromLocationName = (locationName, dataObj) => {

    let outputData = dataObj;

    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=${process.env.openWeatherAPIKey}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    reject('Unable to get weather data');
                }
            })
            .then(data => {
                console.log('Weather OK');
                outputData = {
                    ...outputData,
                    weatherData: data,
                    latitude: data.coord.lat,
                    longitude: data.coord.lon
                };

                resolve(outputData)
            })
            .catch(error => console.log(error))
    })

};

module.exports = {getWeatherDataFromLocationName};