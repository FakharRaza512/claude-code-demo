// Simple in‑memory mock store for customers (shared across pages)
interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
  employeeRange: string;
  revenueRange: string;
  appointment?: string | null; // ISO timestamp or null
  stage: string;
  soldAmount?: number | null;
  createdAt: string;
}

let customers: Customer[] = [];

export const addCustomer = (c: Omit<Customer, "id" | "createdAt">) => {
  const newCust = {
    ...c,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  } as Customer;
  customers = [...customers, newCust];
  return newCust;
};

export const getCustomers = () => customers;

export const updateCustomerStage = (id: number, newStage: string) => {
  customers = customers.map((c) => (c.id === id ? { ...c, stage: newStage } : c));
};
