import React from "react";
import CustomerCard from "./CustomerCard";

interface Props {
  title: string;
  customers: any[];
  onStageChange: (id: number, newStage: string) => void;
}

export default function PipelineColumn({ title, customers, onStageChange }: Props) {
  return (
    <div className="flex flex-col w-64 flex-shrink-0">
      <h3 className="text-lg font-semibold mb-3 text-center bg-gray-200 p-2 rounded-t">
        {title}
      </h3>
      <div className="space-y-3 overflow-y-auto flex-1 p-2 bg-gray-100 rounded-b">
        {customers.map((c) => (
          <CustomerCard key={c.id} customer={c} onStageChange={onStageChange} />
        ))}
      </div>
    </div>
  );
}
