import { memo } from 'react';

import convertDateToObject from "./modules/convertDateToObject";

import './DailyForecast.css';

const DailyForecast = (props) => {

    const { dailyData, timezoneOffset } = props;

    return (
        <>
            <h4>7-Day Forecast</h4>
            <div className="daily-forecast-wrapper">
                {dailyData.slice(1).map((obj, index) => {
                    const {day: dailyDay, date: dailyDate, month: dailyMonth} = convertDateToObject(obj.dt, timezoneOffset);
                    const {min: dailyMinTemp, max: dailyMaxTemp} = obj.temp;
                    const [{description: dailyWeatherDesc, icon: dailyWeatherIcon}] = obj.weather;
                    return(
                        <div className="daily-forecast-container" key={index}>
                            <div className="daily-forecast-date">
                                {dailyDay}, {dailyDate}/{dailyMonth}
                            </div>
                            <div className="daily-forecast-details">
                                <span className="daily-temp-details">
                                    <span>H: {dailyMaxTemp.toFixed(0)}°</span>
                                    <span>L: {dailyMinTemp.toFixed(0)}°</span>
                                </span>
                                <img src={`http://openweathermap.org/img/wn/${dailyWeatherIcon}@2x.png`} alt={`daily-weather-icon-${index}`}/>
                                <span className="daily-forecast-desc">
                                    {dailyWeatherDesc.charAt(0).toUpperCase() + dailyWeatherDesc.slice(1)}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default memo(DailyForecast);
