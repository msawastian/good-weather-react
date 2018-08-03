const fetch = require('node-fetch');

const getAQIData = (latitude, longitude, dataObj, retryCount) => {

    let outputData = dataObj,
        retryCounter;

    if (!retryCount) {
        retryCounter = 0;
    } else {
        retryCounter = retryCount;
    }

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

                if (retryCounter > 1) {
                    console.log('AQI Exceeded Limit');

                    retryCounter = 0;
                    reject('Exceeded retry limit')
                } else if (data.data) {
                    console.log('AQI Success');
                    outputData = {
                        ...outputData,
                        aqiData: data.data
                    };
                    resolve(outputData)
                } else {
                    console.log('AQI Retry');
                    retryCounter++;
                    resolve(getAQIData(latitude, longitude, dataObj, retryCounter))
                }

            })
            .catch(error => console.log(error))
    })

};

module.exports = {getAQIData};