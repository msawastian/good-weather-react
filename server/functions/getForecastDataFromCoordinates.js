const fetch = require('node-fetch');

const getForecastDataFromCoordinates = (latitude, longitude, dataObj) => {

    let outputData = dataObj;

    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=1564f8b4dd2a1779efdc16350e54fe25`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    reject('Unable to get weather data');
                }
            })
            .then(data => {
                console.log('Forecast OK');
                outputData = {
                    ...outputData,
                    forecastData: data.list
                };

                resolve(outputData)
            })
            .catch(error => console.log(error))
    })

};

module.exports = {getForecastDataFromCoordinates};