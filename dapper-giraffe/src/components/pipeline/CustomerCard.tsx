import React from "react";
import { updateCustomerStage } from "@/lib/mockStore";

interface Props {
  customer: any; // simple for now
  onStageChange: (id: number, newStage: string) => void;
}

export default function CustomerCard({ customer, onStageChange }: Props) {
  const handleStageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStage = e.target.value;
    onStageChange(customer.id, newStage);
    updateCustomerStage(customer.id, newStage);
  };

  const formatDate = (iso: string | null) => {
    if (!iso) return "-";
    const d = new Date(iso);
    return d.toLocaleString();
  };

  return (
    <div className="bg-white rounded shadow p-3 space-y-1 text-sm border">
      <div className="font-medium">
        {customer.firstName} {customer.lastName}
      </div>
      <div>{customer.email}</div>
      <div>{customer.phone}</div>
      <div>Revenue: {customer.revenueRange}</div>
      <div>Appointment: {formatDate(customer.appointment)}</div>
      {customer.soldAmount && <div>Sold: ${customer.soldAmount}</div>}
      <div className="mt-2">
        <select
          value={customer.stage}
          onChange={handleStageSelect}
          className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50"
        >
          <option value="lead">Lead</option>
          <option value="appointment">Appointment</option>
          <option value="qualified">Qualified</option>
          <option value="sold">Sold</option>
          <option value="not_interested">Not Interested</option>
        </select>
      </div>
    </div>
  );
}
