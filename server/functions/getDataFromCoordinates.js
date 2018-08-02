const {getWeatherDataFromCoordinates} = require("./getWeatherDataFromCoordinates");
const {getForecastDataFromCoordinates} = require("./getForecastDataFromCoordinates");
const {getAirlyData} = require("./getAirlyData");
const {getAQIData} = require("./getAQIData");

const getDataFromCoordinates = (latitude, longitude, dataObject) => {

    return new Promise(((resolve, reject) => {
        getWeatherDataFromCoordinates(latitude, longitude, dataObject)
            .then(outputData => {
                return getForecastDataFromCoordinates(latitude, longitude, outputData)
            })
            .then(outputData => {
                return getAirlyData(latitude, longitude, outputData)
            })
            .then(outputData => {
                return getAQIData(latitude, longitude, outputData)
            })
            .then(outputData => {
                resolve(outputData)
            })
            .catch(error => reject(error))
    }))
};

module.exports = {getDataFromCoordinates}