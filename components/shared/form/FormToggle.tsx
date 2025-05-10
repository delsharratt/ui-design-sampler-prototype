import React from 'react';

interface FormToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const FormToggle: React.FC<FormToggleProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="checkbox"
      />
      <span>{label}</span>
    </label>
  );
};
