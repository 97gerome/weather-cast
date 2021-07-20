import { useMemo } from 'react';
import debounce from 'lodash.debounce';
import SearchResults from './SearchResults';

import './SearchBar.css'
import {Search} from '@material-ui/icons';

const SearchBar = (props) => {

    const {setSearchItem, searchResults, setWeatherCoordinates, resultsVisibility} = props;

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
            </div>
            <SearchResults
                searchResults={searchResults} 
                setWeatherCoordinates={setWeatherCoordinates}
                resultsVisibility={resultsVisibility}
            />
        </div>
    )
}

export default SearchBar;
