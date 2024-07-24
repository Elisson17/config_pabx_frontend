import React from "react";

interface SwitchProps {
  label: string;
  handleToggle: () => void;
  checked: boolean;
  disabled?: boolean;
}

const Switch = ({ label, handleToggle, checked, disabled }: SwitchProps) => {
  return (
    <div className="flex items-center gap-1 justify-start text-color-light dark:text-color-dark">
      <div
        className={`ml-3 flex h-5 w-8 items-center rounded-full p-0.5 transition-colors duration-300 ${
          checked ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
        }`}
      >
        <button
          type="button"
          aria-label="Distribuição automática"
          onClick={handleToggle}
          className={`h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
            checked ? "translate-x-3" : ""
          }`}
          disabled={disabled}
        />
      </div>
      <span className="truncate text-sm">{label}</span>
    </div>
  );
};

export default Switch;
