const {getWeatherDataFromLocationName} = require("./getWeatherDataFromLocationName");
const {getForecastDataFromLocationName} = require("./getForecastDataFromLocationName");
const {getAirlyData} = require("./getAirlyData");
const {getAQIData} = require("./getAQIData");

const getDataFromLocationName = (locationName, dataObject) => {

    return new Promise(((resolve, reject) => {
        getWeatherDataFromLocationName(locationName, dataObject)
            .then(outputData => {
                return getForecastDataFromLocationName(locationName, outputData)
            })
            .then(outputData => {
                return getAirlyData(outputData.latitude, outputData.longitude, outputData)
            })
            .then(outputData => {
                return getAQIData(outputData.latitude, outputData.longitude, outputData)
            })
            .then(outputData => {
                resolve(outputData)
            })
            .catch(error => reject(error))
    }))
};

module.exports = {getDataFromLocationName};