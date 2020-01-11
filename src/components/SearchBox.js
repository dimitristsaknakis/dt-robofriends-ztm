import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">  {/* Tachyons padding 2 class*/}
            <input 
                /* adding a class with padding, border, backgrnd color */
                className="pa3 ba b--dark-gray bg-lightest-gray"
                type="text"
                placeholder="search robots"
                onChange={searchChange} // the event handler in App
            />
        </div>
    );
};

export default SearchBox;