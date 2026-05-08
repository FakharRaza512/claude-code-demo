"use client";

import { useState } from "react";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import TextAreaField from "@/components/forms/TextAreaField";
import DatePicker from "@/components/forms/DatePicker";
import TimeSelect from "@/components/forms/TimeSelect";
import { getStage, formatAppointment } from "@/utils/leadUtils";
import { addCustomer } from "@/lib/mockStore";

const employeeOptions = [
  { value: "1-3", label: "1‑3" },
  { value: "3-5", label: "3‑5" },
  { value: "5-10", label: "5‑10" },
  { value: "10-25", label: "10‑25" },
  { value: "25+", label: "25+" },
];

const revenueOptions = [
  { value: "200k-500k", label: "200k‑500k" },
  { value: "500k-1M", label: "500k‑1M" },
  { value: "Above 1M", label: "Above 1M" },
];

export default function LandingPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
    employeeRange: "",
    revenueRange: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stage = getStage(form.appointmentDate, form.revenueRange);
    const appointment = formatAppointment(form.appointmentDate, form.appointmentTime);
    addCustomer({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      notes: form.notes,
      employeeRange: form.employeeRange,
      revenueRange: form.revenueRange,
      appointment,
      stage,
      soldAmount: null,
    });
    // clear form
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
      employeeRange: "",
      revenueRange: "",
      appointmentDate: "",
      appointmentTime: "",
    });
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Book a Demo</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
        <InputField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required />
        <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <InputField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
        <TextAreaField label="Extra Notes" name="notes" value={form.notes} onChange={handleChange} />
        <SelectField label="Employee Range" name="employeeRange" value={form.employeeRange} onChange={handleChange} options={employeeOptions} required />
        <SelectField label="Revenue Range" name="revenueRange" value={form.revenueRange} onChange={handleChange} options={revenueOptions} required />
        <DatePicker label="Appointment Date" name="appointmentDate" value={form.appointmentDate} onChange={handleChange} />
        <TimeSelect label="Appointment Time" name="appointmentTime" value={form.appointmentTime} onChange={handleChange} />
        <div className="md:col-span-2 flex justify-end">
          <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
