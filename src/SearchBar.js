import {useState, useCallback} from 'react';
import debounce from 'lodash.debounce';

import './SearchBar.css'

const SearchBar = () => {

    const debouncedAPICall = useCallback(
        debounce((debouncedSearchItem) => console.log(debouncedSearchItem), 700),
        []
    );

    const changeHandler = (e) => debouncedAPICall(e.target.value)
    return (
        <div className="search-bar">
            <form >
                <input type="text" onChange = {changeHandler}/>
            </form>
        </div>
    )
}

export default SearchBar
