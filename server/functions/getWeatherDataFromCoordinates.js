const fetch = require('node-fetch');

const getWeatherDataFromCoordinates = (latitude, longitude, dataObj) => {

    let outputData = dataObj;

    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.openWeatherAPIKey}`)
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
                    weatherData: data
                };
                latitude = data.coord.lat;
                longitude = data.coord.lon;

                resolve(outputData)
            })
            .catch(error => console.log(error))
    })

};

module.exports = {getWeatherDataFromCoordinates};