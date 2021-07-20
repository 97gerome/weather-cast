import { useTransition, animated } from 'react-spring';
import Loader from './Loader';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

import './WeatherCard.css';

const WeatherCard = (props) => {

    const {location, isWeatherCardLoading, weatherData, tempUnit} = props;

    const loaderFade = useTransition(isWeatherCardLoading, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 150 }
    })

    return (
        <div className="weather-card">
            {loaderFade((style, item) =>
                item ?
                <animated.div style={style} className="loader-wrapper">
                    <Loader />
                </animated.div>
                : <>
                    <div className="location">{location}</div>
                    <CurrentWeather weatherData={weatherData} tempUnit={tempUnit}/>
                    <HourlyForecast weatherData={weatherData}/>
                    <DailyForecast weatherData={weatherData}/>
                </>
            )}
        </div>
    );
}

export default WeatherCard;
