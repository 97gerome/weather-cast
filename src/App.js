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
  const [weatherCoordinates, setWeatherCoordinates] = useState({});
  const [resultsVisibility, toggleResultsVisibility] = useState(false);

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchItem}&limit=5&appid=${apiKey}`;

  useEffect(() => {  
    if (searchItem){
      axios.get(url)
        .then(response => {
          if (response.data.length > 0){
            setSearchResults(response.data);
            toggleResultsVisibility(true);
          }
          else toggleResultsVisibility(false);
        })
        .catch(error => {
          throw new Error(error.message);
        });
    }
    else toggleResultsVisibility(false);
  }, [searchItem]);

  useEffect(() => {
    toggleResultsVisibility(false);
  }, [weatherCoordinates]);

  return (
    <div className="App">
      <TopBar />
      <main>
        <SearchBar 
          setSearchItem ={setSearchItem} 
          searchResults={searchResults} 
          setWeatherCoordinates={setWeatherCoordinates} 
          resultsVisibility={resultsVisibility}
        />
        <WeatherCard />
      </main>
    </div>
  );
}

export default App;
