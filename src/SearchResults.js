import {useEffect} from 'react';

import './SearchResults.css';

const SearchResults = (props) => {
    
    const  {setSearchItem, searchResults, setWeatherCoordinates} = props;

    const changeHandler = (lat, lon, name, country) => {
        document.getElementById("search_input").value = "";
        setSearchItem("");
        setWeatherCoordinates({lat: lat, lon: lon, loc: `${name}, ${country}`})
    }

    return (
        <div className="search-results">
            {searchResults.map((arrItem, index) => {
                let {name, country, lat, lon} = arrItem;
                return (
                    <div className="search-result" key={index} onClick={() => changeHandler(lat, lon, name, country)}>
                        <span className="search-result-details">
                            {name}, {country}
                            <img src={`https://www.countryflags.io/${country}/flat/64.png`} alt={country}></img>
                        </span>
                    </div>
                );
            })}          
        </div>
    )
}

export default SearchResults
