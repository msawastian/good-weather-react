

let env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    const config = require('./config.json');
    const envConfig = config[env];

    Object.keys(envConfig).forEach(key => {
        process.env[key] = envConfig[key];
    });

}

if (env === 'production') {
    const config = require('./config.json');

    process.env.openWeatherAPIKey = config.production['openWeatherAPIKey'];
    process.env.airlyAPIKey = config.production['airlyAPIKey'];
    process.env.aqiAPIKey = config.production['aqiAPIKey'];
}

console.log('env *****', env);