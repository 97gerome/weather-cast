import {useEffect} from 'react';

import './SearchResults.css';

const SearchResults = (props) => {
    
    const  {searchResults, setWeatherCoordinates} = props;

    return (
        <div className="search-results">
            {searchResults.map((arrItem, index) => {
                let {name, country, lat, lon} = arrItem;
                return (
                    <div className="search-result" key={index} onClick={() => setWeatherCoordinates({lat: lat, lon: lon, loc: `${name}, ${country}`})}>
                        {name}, {country}
                        <img src={`https://www.countryflags.io/${country}/flat/64.png`} alt={country}></img>
                    </div>
                );
            })}          
        </div>
    )
}

export default SearchResults
