import { memo } from 'react';

import convertDateToObject from './modules/convertDateToObject';

import './HourlyForecast.css';

const HourlyWeather = (props) => {

    const { hourlyData, timezoneOffset } = props;

    return (
        <div className="hourly-forecast-wrapper">
            {hourlyData.slice(0, 24).map((obj, index) => {
                const {hour: hourlyTime, date: hourlyDate, month: hourlyMonth} = convertDateToObject(obj.dt, timezoneOffset);
                const [{icon: hourlyWeatherIcon}] = obj.weather;
                return (
                    <div className="hourly-forecast-container" key={index}>
                        <div className="hourly-forecast-time">
                            {hourlyTime + ":00"}
                        </div>
                        <div className="hourly-forecast-date">
                            {hourlyDate}/{hourlyMonth}
                        </div>
                        <div className="hourly-forecast-details">
                            {obj.temp.toFixed(0)}°
                            <img src={`http://openweathermap.org/img/wn/${hourlyWeatherIcon}@2x.png`} alt={`hourly-forecast-icon-${index}`}/>
                        </div>
                    </div>
                );   
            })}
        </div>
    )
}

export default memo(HourlyWeather);
