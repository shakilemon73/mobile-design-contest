import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface IOSButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive";
  size?: "default" | "compact";
  children: React.ReactNode;
}

export function IOSButton({ 
  variant = "primary",
  size = "default",
  children, 
  className,
  ...props 
}: IOSButtonProps) {
  const sizeClasses = size === "compact" ? "h-10 px-4 text-sm" : "h-12 px-6 text-base";
  
  return (
    <button
      className={cn(
        "ios-button",
        sizeClasses,
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
