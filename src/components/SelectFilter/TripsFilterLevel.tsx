import React from 'react';
import SelectFilter from "./SelectFilter.tsx";

const TripsFilterLevel: React.FC = () => {
    const levelOptions = [
        { value: '', label: 'level' },
        { value: 'easy', label: 'easy' },
        { value: 'moderate', label: 'moderate' },
        { value: 'difficult', label: 'difficult' },
    ];

    return <SelectFilter dataTestId="filter-level" name="level" options={levelOptions} />;
};

export default TripsFilterLevel;
