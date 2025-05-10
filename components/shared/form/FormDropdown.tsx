import React, { ChangeEventHandler } from 'react';

interface FormDropdownProps {
    label: string;
    value: string;
    options: string[];
    onChange: ChangeEventHandler;
    disabled?: false;
}

export const FormDropdown: React.FC<FormDropdownProps> = ({ label, value, options, onChange }) => {

    return (
        <label>
            <span className="mr-2">{label}:</span>
            <select
                value={value}
                onChange={onChange}
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
