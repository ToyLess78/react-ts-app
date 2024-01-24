import React from 'react';
import {DurationFilterProps} from "../../helpers/interfases.ts";


const DurationFilter: React.FC<DurationFilterProps> = ({ dataTestId, name }) => {
    const durationOptions = [
        { value: '', label: 'duration' },
        { value: '0_x_5', label: '< 5 days' },
        { value: '5_x_10', label: '< 10 days' },
        { value: '10', label: '≥ 10 days' },
    ];

    return (
        <label className="select">
            <span className="visually-hidden">{`Search by ${name}`}</span>
            <select data-test-id={dataTestId} name={name}>
                {durationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default DurationFilter;
