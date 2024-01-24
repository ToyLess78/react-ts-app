import React from 'react';

interface SearchInputProps {
    label: string;
    dataTestId: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = (
    {
        label,
        dataTestId,
        name,
        type,
        placeholder,
        value,
        onChange,
    }
) => {
    return (
        <label className="trips-filter__search input">
            <span className="visually-hidden">{label}</span>
            <input
                data-test-id={dataTestId}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

export default SearchInput;
