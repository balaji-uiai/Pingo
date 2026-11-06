import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass" | "ghost" | "neon";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
  showArrow = false,
  type = "button",
  disabled = false,
  ariaLabel,
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base font-medium",
  }[size];

  let variantClass = "btn-primary";
  if (variant === "secondary") {
    variantClass = "btn-secondary";
  } else if (variant === "glass") {
    variantClass =
      "bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-violet-500/40 backdrop-blur-md rounded-full transition-all duration-300";
  } else if (variant === "ghost") {
    variantClass =
      "text-brand-muted hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200";
  } else if (variant === "neon") {
    variantClass =
      "bg-[#B5FF45] text-[#080711] font-semibold hover:bg-[#c6ff6d] shadow-[0_0_20px_rgba(181,255,69,0.4)] rounded-full transition-all duration-200";
  }

  const content = (
    <>
      {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  const combinedClass = `inline-flex items-center justify-center font-medium transition-all group ${sizeClasses} ${variantClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default Button;
