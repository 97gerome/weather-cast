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
    const {daily: weekDailyData} = weatherData || {daily: []};

    return (
        <div className="weather-card">
            {weatherData && weatherData.current && weatherData.current.weather &&
                <>
                    <div className="location">{location}</div>
                    <div className="current-weather-container">
                        <div className="current-dt">{currentDay}, {currentDate}/{currentMonth}</div>
                        <div className="current-temp">{currentTemp.toFixed()}°{tempUnit === "metric"? "C" : "F"}</div>
                        <div className="current-weather-details">
                            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="current-weather-icon"/>
                            {currentWeatherDesc.charAt(0).toUpperCase() + currentWeatherDesc.slice(1)}
                        </div>
                    </div>
                    <div className="hourly-weather-wrapper">
                        {dayHourlyData.slice(0, 24).map((hourlyData, index) => {
                            const {hour: hourlyTime, date: hourlyDate, month: hourlyMonth} = convertDateToObject(hourlyData.dt, timezoneOffset);
                            const [{icon: hourlyWeatherIcon}] = hourlyData.weather;
                            return (
                                <div className="hourly-weather-container" key={index}>
                                    <div className="hourly-weather-time">
                                        {hourlyTime + ":00"}
                                    </div>
                                    <div className="hourly-weather-date">
                                        {hourlyDate}/{hourlyMonth}
                                    </div>
                                    <div className="hourly-weather-details">
                                        {hourlyData.temp.toFixed(0)}°
                                        <img src={`http://openweathermap.org/img/wn/${hourlyWeatherIcon}@2x.png`} alt={`hourly-weather-icon-${index}`}/>
                                    </div>
                                </div>
                            );   
                        })}
                    </div>
                    <div className="daily-weather-wrapper">
                        {weekDailyData.map((dailyData, index) => {
                            const {day: dailyDay, date: dailyDate, month: dailyMonth} = convertDateToObject(dailyData.dt, timezoneOffset);
                            const [{description: dailyWeatherDesc}] = dailyData.weather;
                            return(
                                <div className="daily-weather-container" key={index}>
                                    {dailyDay}, {dailyDate}/{dailyMonth}
                                    {dailyWeatherDesc}
                                </div>
                            );
                        })}
                    </div>
                </>
            }
        </div>
    );
}

WeatherCard.defaultProps = {

};

export default WeatherCard;
