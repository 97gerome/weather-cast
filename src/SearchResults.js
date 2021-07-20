import { useTransition, animated } from 'react-spring';

import './SearchResults.css';

const SearchResults = (props) => {
    
    const  { searchResults, setWeatherCoordinates, resultsVisibility } = props;
    
    const transitionFade = useTransition(resultsVisibility, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    });

    return (
        transitionFade((style, item) => 
            item &&
            <animated.div className="search-results" style={style} >
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
            </animated.div>  
        )
    );
}

export default SearchResults
