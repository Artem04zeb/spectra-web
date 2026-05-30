import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#6C4CE5] text-white hover:bg-[#5B3BD2] focus-visible:ring-[#6C4CE5]/40",
  secondary:
    "bg-spectra-surface text-spectra-text hover:bg-spectra-surface-alt focus-visible:ring-spectra-text/20",
  ghost:
    "bg-transparent text-spectra-text hover:bg-spectra-surface focus-visible:ring-spectra-text/20",
  light:
    "bg-white text-[#5B3BD2] hover:bg-white/90 focus-visible:ring-white/50",
};

export const Button = ({
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={`inline-flex min-h-11 cursor-pointer items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${className}`}
    {...props}
  >
    {children}
  </button>
);
