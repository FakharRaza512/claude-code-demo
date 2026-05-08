import React from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Generate times from 08:00 to 20:00 (9 PM not inclusive) at 30‑min intervals
const generateTimes = () => {
  const times: { value: string; label: string }[] = [];
  for (let hour = 8; hour < 21; hour++) {
    const h = String(hour).padStart(2, "0");
    times.push({ value: `${h}:00`, label: `${h}:00` });
    times.push({ value: `${h}:30`, label: `${h}:30` });
  }
  // Remove 21:00 slot (hour 21) – loop stops before 21
  return times;
};

const TIME_OPTIONS = generateTimes();

export default function TimeSelect({ label, name, value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="" disabled>Select…</option>
        {TIME_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
