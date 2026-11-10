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
    lg: "px-7 py-3.5 text-base font-semibold",
  }[size];

  let variantClass = "btn-primary";
  if (variant === "secondary") {
    variantClass = "btn-secondary";
  } else if (variant === "glass") {
    variantClass =
      "bg-[#F5F6FA]/80 dark:bg-[#171A2E]/80 text-[#171B2E] dark:text-[#FFFFFF] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#635BFF] backdrop-blur-md rounded-full transition-all duration-200";
  } else if (variant === "ghost") {
    variantClass =
      "text-[#62677D] hover:text-[#171B2E] dark:text-[#B5BAD0] dark:hover:text-[#FFFFFF] hover:bg-[#F5F6FF] dark:hover:bg-[#101326] rounded-full transition-all duration-200";
  } else if (variant === "neon") {
    variantClass =
      "bg-[#20C5D8] text-[#0B0D19] font-semibold hover:bg-[#1AB0C2] shadow-[0_0_20px_rgba(32,197,216,0.4)] rounded-full transition-all duration-200";
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
