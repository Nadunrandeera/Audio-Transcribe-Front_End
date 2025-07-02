// src/components/ui/card.tsx
import React from "react";

export function Card({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`bg-white rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={className}>{children}</div>;
}
