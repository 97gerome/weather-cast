import {useMemo, useState, useEffect} from 'react';
import debounce from 'lodash.debounce';

import './SearchBar.css'

const SearchBar = (props) => {

    const {setSearchItem, searchResults} = props;

    const debouncedSetState = useMemo(
        () => debounce(text => setSearchItem(text), 800)
    , [setSearchItem]);

    const changeHandler = (e) => {
        debouncedSetState(e.target.value);
    }

    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" onChange = {changeHandler}/>
            </div>
            <div className="search-results">
                {searchResults.length > 0 && (
                    searchResults.map((arrItem, index) => {
                        let {name, country} = arrItem;
                        return (
                            <div className="search-result" key={index}>{name}, {country}
                                <img src={`https://www.countryflags.io/${country}/flat/64.png`}></img>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    )
}

export default SearchBar
