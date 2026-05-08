import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import Card from "./Card";
import TaxResult from "./TaxResult";

type JurisdictionOption = {
  label: string;
  value: string;
};

const jurisdictionOptions: JurisdictionOption[] = [
  { label: "United States", value: "US" },
  { label: "Canada", value: "CA" },
  // Add more as needed
];

export default function TaxForm() {
  const [income, setIncome] = useState<string>("");
  const [deductions, setDeductions] = useState<string>("");
  const [jurisdiction, setJurisdiction] = useState<string>("");
  const [errors, setErrors] = useState<{ income?: string; deductions?: string; jurisdiction?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!income) newErrors.income = "Income is required";
    else if (isNaN(Number(income))) newErrors.income = "Income must be a number";

    if (!deductions) newErrors.deductions = "Deductions are required";
    else if (isNaN(Number(deductions))) newErrors.deductions = "Deductions must be a number";

    if (!jurisdiction) newErrors.jurisdiction = "Jurisdiction is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [result, setResult] = useState<{ taxableIncome: number; estimatedTax: number; effectiveRate: number } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const inc = Number(income);
      const ded = Number(deductions);
      const taxable = Math.max(inc - ded, 0);
      // Simple tax: 20% flat rate (placeholder)
      const tax = taxable * 0.2;
      const rate = taxable === 0 ? 0 : (tax / taxable) * 100;
      setResult({ taxableIncome: taxable, estimatedTax: tax, effectiveRate: rate });
    }
  };

  return (
    <>
      <Card title="Tax Calculator" className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Income"
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            error={errors.income}
            placeholder="Enter your total income"
          />
          <Input
            label="Deductions"
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
            error={errors.deductions}
            placeholder="Enter total deductions"
          />
          <Select
            label="Jurisdiction"
            options={jurisdictionOptions.map((opt) => ({ value: opt.value, label: opt.label }))}
            value={jurisdiction}
            onChange={(e) => setJurisdiction(e.target.value)}
            error={errors.jurisdiction}
          />
          <Button type="submit" variant="primary" className="w-full mt-2">
            Calculate
          </Button>
        </form>
      </Card>
      {result && (
        <TaxResult
          taxableIncome={result.taxableIncome}
          estimatedTax={result.estimatedTax}
          effectiveRate={result.effectiveRate}
        />
      )}
    </>
  );
}