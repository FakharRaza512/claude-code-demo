"use client";

import { useEffect, useState } from "react";
import PipelineColumn from "@/components/pipeline/PipelineColumn";
import { getCustomers, updateCustomerStage } from "@/lib/mockStore";

const stages = ["lead", "appointment", "qualified", "sold", "not_interested"];

export default function Dashboard() {
  const [customers, setCustomers] = useState<any[]>([]);

  useEffect(() => {
    setCustomers(getCustomers());
  }, []);

  const handleStageChange = (id: number, newStage: string) => {
    updateCustomerStage(id, newStage);
    setCustomers(getCustomers());
  };

  // Group customers by stage
  const grouped = stages.map((stage) => ({
    stage,
    items: customers.filter((c) => c.stage === stage),
  }));

  return (
    <section className="p-6 overflow-x-auto" style={{ minHeight: "80vh" }}>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Pipeline Dashboard</h2>
      <div className="flex flex-nowrap gap-4">
        {grouped.map((col) => (
          <PipelineColumn
            key={col.stage}
            title={col.stage.replace("_", " ").toUpperCase()}
            customers={col.items}
            onStageChange={handleStageChange}
          />
        ))}
      </div>
    </section>
  );
}
