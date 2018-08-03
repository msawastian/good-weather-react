# GOOD Weather (React)

<img width='250' height='250' src='images/good_weather_logo.png'>

# Live version
Live version available [here](https://radiant-taiga-12880.herokuapp.com/#/).

# Project description
GOOD Weather is a weather application which started out as my final project during Coders Lab frontend bootcamp.
It grew a bit over time and now consists of a React-based website paired with Node.js / Express server.

Front-end part utilizes the functional programming principle, with all but one components being pure functions.
It holds state in a single root component, with necessary data passed to child components as props. 

All weather data is fetched from various API by the server, then forwarded to the client-side website.
Server uses Express to serve static files and to respond to fetch requests from the client app.

Current functionality includes:
<ul>
  <li>current weather, forecast and pollution data views for any given location found in OpenWeatherMap database</li>
  <li>geolocation through browser geolocation API</li>
  <li>dynamic styling of the pollution view</li>
  <li>mobile orientated styling</li>
</ul>

# APIs utilized

[OpenWeatherMap API](https://openweathermap.org/api) for weather data (current and forecast).
[Airly API](https://airly.eu/pl/api/) for pollution data (CAQI, PM10, PM2.5).
[AQICN](https://aqicn.org/api/) for additional pollution data (C0, NO2, SO2, O3).

# 3rd party assets
Search and geolocation icons made by Google, downloaded from [FlatIcon](http://www.flaticon.com).

# Screenshots

<div style='display: flex'>
  <img width='250' src='/../screenshots/screenshots/current_weather.png'>
  <img width='250' src='/../screenshots/screenshots/forecast.png'>
  <img width='250' src='/../screenshots/screenshots/pollution.png'>
 </div>
