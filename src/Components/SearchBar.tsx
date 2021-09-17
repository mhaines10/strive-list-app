import React, { useState, useEffect } from 'react';
import '../Styles/SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

function SearchBar(props: {onChange: any}) {
    const [queryString, updateSearch] = useState('');

    useEffect(() => {
        props.onChange(queryString);
    });

    function updateText(evt: React.ChangeEvent<HTMLInputElement>) {
        updateSearch(evt.target.value);
    }

    function clearText() {
        updateSearch('');
    }

    return (
        <div className="SearchBar">
            <FontAwesomeIcon className="SearchIcon" icon={faSearch} />
            <input type="text" placeholder="Search in Air HQ" name="searchBar" value={queryString} onChange={updateText}></input>
            <a className="CloseButton" onClick={clearText}>
                <FontAwesomeIcon className="CloseIcon" icon={faTimes} />
            </a>
            
        </div>        
    )
}

export default SearchBar;