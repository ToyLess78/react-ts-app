import React from 'react';

interface FilterFormProps {
    state: {
        search: string;
        duration: string;
        level: string;
    };
    dispatch: React.Dispatch<{ type: string; payload: string | number }>;
}

const FilterForm: React.FC<FilterFormProps> = ({ state, dispatch }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        dispatch({ type: `SET_${e.target.name.toUpperCase()}`, payload: e.target.value });
    };

    return (
        <form className="trips-filter__form" autoComplete="off">
            <label className="trips-filter__search input">
                <span className="visually-hidden">Search by name</span>
                <input
                    data-test-id="filter-search"
                    name="search"
                    type="search"
                    placeholder="search by title"
                    value={state.search}
                    onChange={handleInputChange}
                />
            </label>
            <label className="select">
                <span className="visually-hidden">Search by duration</span>
                <select
                    data-test-id="filter-duration"
                    name="duration"
                    value={state.duration.toString()}
                    onChange={handleInputChange}
                >
                    <option value="">duration</option>
                    <option value="0_x_5">{'< 5 days'}</option>
                    <option value="5_x_10">{'< 10 days'}</option>
                    <option value="< 10 days">{'≥ 10 days'}</option>
                </select>
            </label>
            <label className="select">
                <span className="visually-hidden">Search by level</span>
                <select
                    data-test-id="filter-level"
                    name="level"
                    value={state.level}
                    onChange={handleInputChange}
                >
                    <option value="">level</option>
                    <option value="easy">easy</option>
                    <option value="moderate">moderate</option>
                    <option value="difficult">difficult</option>
                </select>
            </label>
        </form>
    );
};

export default FilterForm;
