import React from "react";

export interface CardProps {
  /** Optional title displayed at the top of the card */
  title?: string;
  /** Content of the card */
  children: React.ReactNode;
  /** Optional footer actions */
  footer?: React.ReactNode;
  /** Additional Tailwind classes */
  className?: string;
}

export default function Card({
  title,
  children,
  footer,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-4 shadow-sm ${className}`}
    >
      {title && (
        <h2 className="mb-2 text-lg font-semibold text-gray-800">{title}</h2>
      )}
      <div className="mb-4">{children}</div>
      {footer && <div className="border-t pt-3 mt-3">{footer}</div>}
    </div>
  );
}