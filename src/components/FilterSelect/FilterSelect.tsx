import React from 'react';

interface FilterSelectProps {
    label: string;
    dataTestId: string;
    name: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = (
    {
        label,
        dataTestId,
        name,
        value,
        options,
        onChange,
    }
) => {
    return (
        <label className="select">
            <span className="visually-hidden">{label}</span>
            <select
                data-test-id={dataTestId}
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="">{label}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default FilterSelect;
