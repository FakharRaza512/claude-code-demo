import React from "react";

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  /** Options to display */
  options: SelectOption[];
  /** Optional label */
  label?: string;
  /** Optional error message */
  error?: string;
}

export default function Select({
  options,
  label,
  error,
  className = "",
  ...rest
}: SelectProps) {
  const selectId = rest.id ?? `select-${Math.random().toString(36).slice(2)}`;

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={selectId} className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}