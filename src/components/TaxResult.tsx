import React from "react";
import Card from "./Card";

type TaxResultProps = {
  taxableIncome: number;
  estimatedTax: number;
  effectiveRate: number; // expressed as a percentage (e.g., 22.5)
};

export default function TaxResult({
  taxableIncome,
  estimatedTax,
  effectiveRate,
}: TaxResultProps) {
  return (
    <Card title="Tax Summary" className="max-w-lg mx-auto">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="font-medium text-gray-600">Taxable Income:</div>
        <div className="text-right font-medium text-gray-800">
          ${taxableIncome.toLocaleString()}
        </div>

        <div className="font-medium text-gray-600">Estimated Tax:</div>
        <div className="text-right font-medium text-gray-800">
          ${estimatedTax.toLocaleString()}
        </div>

        <div className="font-medium text-gray-600">Effective Rate:</div>
        <div className="text-right font-medium text-gray-800">
          {effectiveRate.toFixed(2)}%
        </div>
      </div>
    </Card>
  );
}
