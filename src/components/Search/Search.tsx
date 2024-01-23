import React from 'react';

const Search: React.FC = () => {
    return (
        <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input data-test-id="filter-search" name="search" type="search" placeholder="search by title" />
        </label>
    );
};

export default Search;
