import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant determines the color scheme.
   * "primary" – blue background, white text.
   * "secondary" – gray background, black text.
   */
  variant?: "primary" | "secondary";
  /** Optional icon placed before the button label */
  startIcon?: React.ReactNode;
  /** Optional icon placed after the button label */
  endIcon?: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  startIcon,
  endIcon,
  ...rest
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors";

  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:ring-gray-500";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...rest}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}