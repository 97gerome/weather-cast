import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import Background from './Background';

import convertDateToObject from './modules/convertDateToObject';

import './WeatherCard.css';

const WeatherCard = (props) => {

    const { location, weatherData, tempUnit } = props;

    return(
        <div className="weather-card">
            <Background 
                weatherId={weatherData.current.weather[0].id}
                time={convertDateToObject(weatherData.current.dt, weatherData.timezone_offset).hour}
            />
            <div className="location">{location}</div>
            <CurrentWeather currentData={weatherData.current} tempUnit={tempUnit} timezoneOffset={weatherData.timezone_offset}/>
            <HourlyForecast hourlyData={weatherData.hourly} timezoneOffset={weatherData.timezone_offset}/>
            <DailyForecast dailyData={weatherData.daily} timezoneOffset={weatherData.timezone_offset}/>
        </div>
    );
}

export default WeatherCard;
