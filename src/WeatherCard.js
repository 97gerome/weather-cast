import { useState, useEffect } from 'react';
import convertDateToObject from './modules/convertDateToObject';

import './WeatherCard.css';

const WeatherCard = (props) => {

    const {location, weatherData} = props;
    const {current} = weatherData;
    const {weather: currentWeather} = current;
    const currentDate = convertDateToObject(current.dt);

    return (
        <div className="weather-card">
            <div className="location">{location}</div>
            <div className="current-day">{currentDate.day}</div>
            <div className="current-date">{currentDate.date}</div>
            <div className="current-weather">{currentWeather[0].main}</div>
            <div className="current-temp">{current.temp}</div>
        </div>
    );
}

export default WeatherCard;
