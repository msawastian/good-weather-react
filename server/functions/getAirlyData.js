const fetch = require('node-fetch');

const getAirlyData = (latitude, longitude, dataObj) => {

    let outputData = dataObj;

    return new Promise((resolve, reject) => {
        fetch(`https://airapi.airly.eu/v1/nearestSensor/measurements?latitude=${latitude}&longitude=${longitude}`,
            {method: 'GET', headers: {
                    "Accept": "application/json",
                    "apikey": process.env.airlyAPIKey
                }})
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    reject('Unable to get Airly data');
                }
            })
            .then(data => {
                console.log('Airly OK');
                outputData = {
                    ...outputData,
                    airlyData: data
                };

                resolve(outputData)
            })
            .catch(error => console.log(error))
    })

};

module.exports = {getAirlyData};