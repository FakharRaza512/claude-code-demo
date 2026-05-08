"use client";

import { useState } from "react";
import { getCustomers, updateCustomerStage } from "@/lib/mockStore";

export default function StatusUpdate() {
  const [phone, setPhone] = useState("");
  const [found, setFound] = useState<any>(null);
  const [status, setStatus] = useState("");
  const [soldAmount, setSoldAmount] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const all = getCustomers();
    const cust = all.find((c) => c.phone === phone);
    if (cust) {
      setFound(cust);
      setStatus(cust.stage);
      setSoldAmount(String(cust.soldAmount ?? ""));
    } else {
      setFound(null);
    }
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!found) return;
    const newStage = status;
    const updates: any = { stage: newStage };
    if (newStage === "sold") {
      updates.soldAmount = Number(soldAmount) || null;
    }
    // Update mock store directly (simple mutation)
    updateCustomerStage(found.id, newStage);
    // Overwrite soldAmount if needed – we reuse mockStore's array reference
    const all = getCustomers();
    const idx = all.findIndex((c) => c.id === found.id);
    if (idx !== -1) {
      all[idx] = { ...all[idx], ...updates };
    }
    setFound(all[idx]);
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Status Update</h2>
      <form onSubmit={handleSearch} className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Customer Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
        <button type="submit" className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Search
        </button>
      </form>

      {found && (
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <strong>Name:</strong> {found.firstName} {found.lastName}
          </div>
          <div>
            <strong>Email:</strong> {found.email}
          </div>
          <div>
            <strong>Phone:</strong> {found.phone}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Update Stage</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50"
            >
              <option value="lead">Lead</option>
              <option value="appointment">Appointment</option>
              <option value="qualified">Qualified</option>
              <option value="sold">Sold</option>
              <option value="not_interested">Not Interested</option>
            </select>
          </div>
          {status === "sold" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Sold Amount</label>
              <input
                type="number"
                value={soldAmount}
                onChange={(e) => setSoldAmount(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
          )}
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Update
          </button>
        </form>
      )}
    </section>
  );
}
