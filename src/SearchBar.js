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
        <div className="search-bar">
            <input type="text" onChange = {changeHandler}/>
            <div className="search-results"></div>
        </div>
    )
}

export default SearchBar
