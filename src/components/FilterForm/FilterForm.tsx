import React from 'react';
import SearchInput from "../SearchInput/SearchInput.tsx";
import FilterSelect from "../FilterSelect/FilterSelect.tsx";

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
            <SearchInput
                label="Search by name"
                dataTestId="filter-search"
                name="search"
                type="search"
                placeholder="search by title"
                value={state.search}
                onChange={handleInputChange}
            />
            <FilterSelect
                label="Search by duration"
                dataTestId="filter-duration"
                name="duration"
                value={state.duration}
                options={[
                    { value: '', label: 'duration' },
                    { value: '0_x_5', label: '< 5 days' },
                    { value: '5_x_10', label: '< 10 days' },
                    { value: '< 10 days', label: '≥ 10 days' },
                ]}
                onChange={handleInputChange}
            />

            <FilterSelect
                label="Search by level"
                dataTestId="filter-level"
                name="level"
                value={state.level}
                options={[
                    { value: '', label: 'level' },
                    { value: 'easy', label: 'easy' },
                    { value: 'moderate', label: 'moderate' },
                    { value: 'difficult', label: 'difficult' },
                ]}
                onChange={handleInputChange}
            />
        </form>
    );
};

export default FilterForm;
