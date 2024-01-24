import React from 'react';
import {SelectFilterProps} from "../../helpers/interfases.ts";

const SelectFilter: React.FC<SelectFilterProps> = ({ dataTestId, name, options }) => {
    return (
        <label className="select">
            <span className="visually-hidden">{`Search by ${name}`}</span>
            <select data-test-id={dataTestId} name={name}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default SelectFilter;
