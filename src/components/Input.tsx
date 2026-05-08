import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label displayed above the input */
  label?: string;
  /** Optional error message shown below the input */
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...rest
}: InputProps) {
  const inputId = rest.id ?? `input-${Math.random().toString(36).slice(2)}`;

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={inputId} className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}