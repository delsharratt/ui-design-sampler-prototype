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
    <label className="flex flex-col">
      <span className="mb-2">{label}:</span>
      <select value={value} onChange={onChange} className="select select-bordered capitalize">
        {options.map((option) => (
          <option
            className={option.length <= 2 ? 'uppercase' : 'capitalize'}
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};
