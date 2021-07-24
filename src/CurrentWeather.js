
import convertDateToObject from './modules/convertDateToObject';

import './CurrentWeather.css';

const CurrentWeather = (props) => {

    const { weatherData, tempUnit } = props;
    const { timezone_offset: timezoneOffset } = weatherData;

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

    return (
        <div className="current-weather-container">
            <div className="current-date">{currentDay}, {currentDate}/{currentMonth}</div>
            <div className="current-temp">{currentTemp.toFixed()}°{tempUnit === "metric"? "C" : "F"}</div>
            <div className="current-weather-details">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="current-weather-icon"/>
                {currentWeatherDesc.charAt(0).toUpperCase() + currentWeatherDesc.slice(1)}
            </div>
        </div>
    )
}

export default CurrentWeather;
