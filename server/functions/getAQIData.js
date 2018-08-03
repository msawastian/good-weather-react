const fetch = require('node-fetch');

const getAQIData = (latitude, longitude, dataObj) => {

    let outputData = dataObj;

    return new Promise((resolve, reject) => {
       fetch(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=eea290e2a3139bc62f0f2a8b6f39621b8394aa52`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    reject('Unable to get AWI data');
                }
            })
            .then(data => {
                console.log('AQI OK');
                outputData = {
                    ...outputData,
                    aqiData: data.data
                };

                resolve(outputData)
            })
            .catch(error => console.log(error))
    })

};

module.exports = {getAQIData};