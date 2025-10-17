import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface IOSButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive";
  children: React.ReactNode;
}

export function IOSButton({ 
  variant = "primary", 
  children, 
  className,
  ...props 
}: IOSButtonProps) {
  return (
    <button
      className={cn(
        "ios-button",
        variant === "primary" && "ios-button-primary",
        variant === "secondary" && "ios-button-secondary",
        variant === "destructive" && "bg-destructive text-destructive-foreground hover:opacity-90 active:scale-95",
        className
      )}
      data-testid={`button-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}
