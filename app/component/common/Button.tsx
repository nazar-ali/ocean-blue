import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300";
  const styles = {
    primary: "bg-primary text-white hover:bg-indigo-700",
    secondary:
      "bg-blue-700 text-white border border-secondary hover:bg-blue-600 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
