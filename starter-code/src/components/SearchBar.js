import React from 'react';

function SearchBar() {
    return (

        <div className="field has-addons">
            <div className="control">
                <input className="input" type="text" placeholder="Find a repository"/>
            </div>
            <div className="control">
                <a className="button is-info">Search</a>
            </div>
        </div>

    )
}

export default SearchBar;