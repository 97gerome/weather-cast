//Import Components
import {useEffect, useState} from 'react';
import axios from 'axios';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';

import './App.css';

const apiKey = process.env.REACT_APP_API_KEY;

function App() {

  const [searchItem, setSearchItem] = useState("");
  const [tempUnit, setTempUnit] = useState("metric");
  const [searchResults, setSearchResults] = useState([]);
  const [resultsVisibility, setResultsVisibility] = useState(false);
  const [isWeatherCardLoading, setWeatherCardLoading] = useState(true);
  const [weatherCoordinates, setWeatherCoordinates] = useState({lat: 14.6042, lon: 120.9822, loc: "Manila, PH"});
  const [weatherData, setWeatherData] = useState({});

  const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${searchItem}&limit=5&appid=${apiKey}`;
  const urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherCoordinates.lat}&lon=${weatherCoordinates.lon}&units=${tempUnit}&appid=${apiKey}`;

  useEffect(() => {
    setResultsVisibility(false);
    if (searchItem){
      axios.get(urlGeo)
        .then(response => {
          if (response.data.length > 0){
            setSearchResults(response.data);
            setResultsVisibility(true);
          }
        })
        .catch(error => {
          throw new Error(error.message);
        });
    }
  }, [searchItem, urlGeo]);

  useEffect(() => {
    document.getElementById("search_input").value = "";
    setSearchItem("");
    setWeatherCardLoading(true);
    axios.get(urlWeather)
      .then(response => {
        if (response){
          setWeatherData(response.data);
          setWeatherCardLoading(false);
        }
      })
      .catch(error => {
        throw new Error(error.message);
      })
  }, [weatherCoordinates, tempUnit, urlWeather]);

  return (
    <div className="App">
      <TopBar />
      <main>
        <SearchBar 
          setSearchItem ={setSearchItem} 
          searchResults={searchResults}
          setWeatherCoordinates={setWeatherCoordinates} 
          resultsVisibility={resultsVisibility}
          tempUnit={tempUnit}
          setTempUnit={setTempUnit}
        />
        <WeatherCard 
          location={weatherCoordinates.loc}
          isWeatherCardLoading={isWeatherCardLoading}
          weatherData={weatherData}
          tempUnit={tempUnit}
          setTempUnit={setTempUnit}
        />
      </main>
    </div>
  );
}

export default App;
