
import convertDateToObject from './modules/convertDateToObject';

import './CurrentWeather.css';

const CurrentWeather = (props) => {

    const { currentData, tempUnit, timezoneOffset } = props;
    const { dt: currentDt, temp: currentTemp, weather: currentWeather } = currentData;
    const { day: currentDay, date: currentDate, month: currentMonth } = convertDateToObject(currentDt, timezoneOffset);
    const [ { description: currentWeatherDesc, icon } ] = currentWeather;

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
