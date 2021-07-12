import { useState, useEffect } from 'react';

import './WeatherCard.css';

const WeatherCard = (props) => {

    const {weatherData} = props;
    const {current} = weatherData;
    const {weather: currentWeather} = current;

    const [location, setLocation] = useState("");
    const [currentDate, setCurrentDate] = useState({});

    useEffect(() => {
        const daysArr = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
        const currentDateObj = new Date(current.dt * 1000);
        setCurrentDate({day: daysArr[currentDateObj]});
    }, [])

    return (
        <div className="weather-card">
            <div className="location">{location}</div>
            <div className="current-date">{currentDate.day}</div>
            <div className="current-weather">{currentWeather[0].main}</div>
            <div className="current-temp">{current.temp}</div>
        </div>
    )
}

export default WeatherCard
