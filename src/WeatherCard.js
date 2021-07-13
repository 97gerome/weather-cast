import { intersection } from 'lodash';
import { useState, useEffect } from 'react';
import convertDateToObject from './modules/convertDateToObject';

import './WeatherCard.css';

const WeatherCard = (props) => {

    const {location, weatherData, tempUnit} = props;   
    const {
        dt: currentDt, 
        temp: currentTemp, 
        weather: currentWeather
    } = weatherData.current || 
    {
        dt: "", 
        temp: 0, 
        weather: [{description: "", icon: "01d"}]
    };
    const {day: currentDay, date: currentDate, month: currentMonth} = convertDateToObject(currentDt);
    const [{description: currentWeatherDesc, icon}] = currentWeather;

    return (
        <div className="weather-card">
            {weatherData && weatherData.current && weatherData.current.weather &&
                <>
                    <div className="location">{location}</div>
                    <div className="current-weather-container">
                        <div className="current-dt">{currentDay}, {currentDate}/{currentMonth}</div>
                        <div className="current-temp">{currentTemp.toFixed()}°{tempUnit === "metric"? "C" : "F"}</div>
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                        <div className="current-weather">{currentWeatherDesc.charAt(0).toUpperCase() + currentWeatherDesc.slice(1)}</div>
                    </div>
                </>
            }
        </div>
    );
}

WeatherCard.defaultProps = {

};

export default WeatherCard;
