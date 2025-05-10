import React from 'react';

interface FormDropdownProps {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
    disabled?: false;
}

export const FormDropdown: React.FC<FormDropdownProps> = ({ label, value, options, onChange }) => {
    console.log(value)
    console.log(onChange)
    return (
        <label>
            <span className="mr-2">{label}:</span>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="select select-bordered"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
};
