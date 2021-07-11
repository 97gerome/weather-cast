import {useMemo, useState, useEffect} from 'react';
import debounce from 'lodash.debounce';
import SearchResults from './SearchResults';

import './SearchBar.css'

const SearchBar = (props) => {

    const {setSearchItem, searchResults, setWeatherCoordinates, resultsVisibility} = props;

    const debouncedSetState = useMemo(
        () => debounce(text => setSearchItem(text), 800)
    , [setSearchItem]);

    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" onChange = {e => debouncedSetState(e.target.value)}/>
            </div>
            {resultsVisibility && <SearchResults searchResults = {searchResults} setWeatherCoordinates = {setWeatherCoordinates}/>}
        </div>
    )
}

export default SearchBar
