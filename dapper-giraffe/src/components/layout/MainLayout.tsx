"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Container from "./Container";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile top bar with toggle could be added later */}
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <Container>{children}</Container>
      </div>
    </div>
  );
}
