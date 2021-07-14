import { intersection } from 'lodash';
import { useState, useEffect } from 'react';
import convertDateToObject from './modules/convertDateToObject';

import './WeatherCard.css';

const WeatherCard = (props) => {

    const {location, weatherData, tempUnit} = props;
    const {timezone_offset: timezoneOffset} = weatherData || "";   
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
    const {day: currentDay, date: currentDate, month: currentMonth} = convertDateToObject(currentDt, timezoneOffset);
    const [{description: currentWeatherDesc, icon}] = currentWeather;
    const {hourly: dayHourlyData} = weatherData || {hourly: []};

    return (
        <div className="weather-card">
            {weatherData && weatherData.current && weatherData.current.weather &&
                <>
                    <div className="location">{location}</div>
                    <div className="current-weather-container">
                        <div className="current-dt">{currentDay}, {currentDate}/{currentMonth}</div>
                        <div className="current-temp">{currentTemp.toFixed()}°{tempUnit === "metric"? "C" : "F"}</div>
                        <div className="current-weather">
                            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                            {currentWeatherDesc.charAt(0).toUpperCase() + currentWeatherDesc.slice(1)}
                        </div>
                    </div>
                    {dayHourlyData.slice(0, 24).map((hourlyData, index) => {
                        const {hour: hourlyTime} = convertDateToObject(hourlyData.dt, timezoneOffset);
                        return (
                            <div className="hourly-weather-container" key={index}>
                                {hourlyData.temp.toFixed(0)}°
                                {hourlyTime + ":00"}
                            </div>
                        );   
                    })}
                </>
            }
        </div>
    );
}

WeatherCard.defaultProps = {

};

export default WeatherCard;
