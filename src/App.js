//Import Components
import {useEffect, useState} from 'react';
import axios from 'axios';
import TopBar from './TopBar';
import SearchBar from './SearchBar';

import './App.css';

const apiKey = process.env.REACT_APP_API_KEY;

function App() {

  const [searchItem, setSearchItem] = useState("");
  const [tempUnit, setTempUnit] = useState("metric");
  const [searchResults, setSearchResults] = useState([]);

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchItem}&limit=5&appid=${apiKey}`;

  useEffect(() => {  
    if (searchItem){
      axios.get(url)
        .then(response => {
          if (response.data.length > 0){
            setSearchResults(response.data);
          }
        })
        .catch(error => {
          throw new Error(error.message);
        });
    }
  }, [searchItem, url]);

  useEffect(() => console.log(searchResults),[searchResults]);

  return (
    <div className="App">
      <TopBar />
      <main>
        <SearchBar setSearchItem ={setSearchItem} searchResults={searchResults} />
      </main>
    </div>
  );
}

export default App;
