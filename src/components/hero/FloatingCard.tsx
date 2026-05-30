import type { ReactNode } from "react";

type FloatingCardProps = {
  children: ReactNode;
  className?: string;
  variant?: "light" | "accent";
};

export const FloatingCard = ({
  children,
  className = "",
  variant = "light",
}: FloatingCardProps) => {
  const variantClasses =
    variant === "accent"
      ? "bg-spectra-accent text-white shadow-card-lg"
      : "bg-white text-spectra-text shadow-card";

  return (
    <div
      className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium ${variantClasses} ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};
