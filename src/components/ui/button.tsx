// src/components/ui/button.tsx
import React from "react";

export function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button className={`transition-colors ${className}`} {...props}>
      {children}
    </button>
  );
}
