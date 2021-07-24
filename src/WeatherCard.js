import Loader from './Loader';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import TempUnitToggle from './TempUnitToggle';

import './WeatherCard.css';

const currentUnitStyle = {
    backgroundColor: "rgb(255, 255, 255, 0.8",
    color: "black"
}

const WeatherCard = (props) => {

    const {location, isWeatherCardLoading, weatherData, tempUnit, setTempUnit} = props;

    if(isWeatherCardLoading){
        return (
            <div className="weather-card">
                <div className="loader-wrapper">
                    <Loader />
                </div>
            </div>
        );
    };
    return(
        <div className="weather-card">
            <div className="location">{location}</div>
            <CurrentWeather weatherData={weatherData} tempUnit={tempUnit}/>
            <HourlyForecast weatherData={weatherData}/>
            <DailyForecast weatherData={weatherData}/>
            <TempUnitToggle 
                tempUnit={tempUnit}
                setTempUnit={setTempUnit}
            />
        </div>
    );
}

export default WeatherCard;
