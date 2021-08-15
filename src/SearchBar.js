import { useMemo, memo } from 'react';
import { useTransition, animated } from 'react-spring';
import debounce from 'lodash.debounce';
import TempUnitToggle from './TempUnitToggle';
import SearchResults from './SearchResults';

import './SearchBar.css'
import {Search} from '@material-ui/icons';

const AnimatedSearchResults = animated(SearchResults);

const SearchBar = (props) => {

    const {setSearchItem, searchResults, setWeatherCoordinates, resultsVisibility, tempUnit, setTempUnit} = props;

    const resultsTransition = useTransition(resultsVisibility, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    });

    const debouncedSetState = useMemo(
        () => debounce(text => setSearchItem(text), 800)
    , [setSearchItem]);

    return (
        <div className="search-wrapper">
            <div className="search-bar">
                <div className="search-icon-wrapper">
                    <Search fontSize="small"/>
                </div>
                <input 
                    type="text" 
                    id="search_input" 
                    onChange={e => debouncedSetState(e.target.value)} 
                    placeholder="Search by City"
                    autoComplete="off"
                />
                <TempUnitToggle 
                    tempUnit={tempUnit}
                    setTempUnit={setTempUnit}
                />
            </div>
            {resultsTransition((style, item) => 
                item && 
                <AnimatedSearchResults 
                    style={style}
                    searchResults={searchResults}
                    setWeatherCoordinates={setWeatherCoordinates}
                />
            )}
        </div>
    )
}

export default memo(SearchBar);
