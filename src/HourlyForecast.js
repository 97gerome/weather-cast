
import convertDateToObject from './modules/convertDateToObject';

import './HourlyForecast.css';

const HourlyWeather = (props) => {

    const { weatherData } = props;
    const { hourly: hourlyForecastData, timezone_offset: timezoneOffset } = weatherData;

    return (
        <div className="hourly-forecast-wrapper">
            {hourlyForecastData.slice(0, 24).map((hourlyData, index) => {
                const {hour: hourlyTime, date: hourlyDate, month: hourlyMonth} = convertDateToObject(hourlyData.dt, timezoneOffset);
                const [{icon: hourlyWeatherIcon}] = hourlyData.weather;
                return (
                    <div className="hourly-forecast-container" key={index}>
                        <div className="hourly-forecast-time">
                            {hourlyTime + ":00"}
                        </div>
                        <div className="hourly-forecast-date">
                            {hourlyDate}/{hourlyMonth}
                        </div>
                        <div className="hourly-forecast-details">
                            {hourlyData.temp.toFixed(0)}°
                            <img src={`http://openweathermap.org/img/wn/${hourlyWeatherIcon}@2x.png`} alt={`hourly-forecast-icon-${index}`}/>
                        </div>
                    </div>
                );   
            })}
        </div>
    )
}

export default HourlyWeather
