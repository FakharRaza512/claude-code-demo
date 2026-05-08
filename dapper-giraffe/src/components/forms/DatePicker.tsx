import React, { useEffect, useState } from "react";

export default function DatePicker({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string; // yyyy-mm-dd
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const min = `${yyyy}-${mm}-${dd}`;
    const future = new Date();
    future.setDate(today.getDate() + 5);
    const fyyyy = future.getFullYear();
    const fmm = String(future.getMonth() + 1).padStart(2, "0");
    const fdd = String(future.getDate()).padStart(2, "0");
    const max = `${fyyyy}-${fmm}-${fdd}`;
    setMinDate(min);
    setMaxDate(max);
  }, []);

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        min={minDate}
        max={maxDate}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required
      />
    </div>
  );
}
