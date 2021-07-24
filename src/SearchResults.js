
import './SearchResults.css';

const SearchResults = (props) => {
    
    const  { style, searchResults, setWeatherCoordinates } = props;

    return (
        <div className="search-results" style={style} >
            {searchResults.map((arrItem, index) => {
                let {name, country, lat, lon} = arrItem;
                return (
                    <div className="search-result" key={index} onClick={() => setWeatherCoordinates({lat: lat, lon: lon, loc: `${name}, ${country}`})}>
                        <span className="search-result-details">
                            {name}, {country}
                            <img src={`https://www.countryflags.io/${country}/flat/64.png`} alt={country}></img>
                        </span>
                    </div>
                );
            })}          
        </div> 
    );
}

export default SearchResults
