import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface IOSInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const IOSInput = forwardRef<HTMLInputElement, IOSInputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="subheadline font-medium text-muted-foreground px-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn("ios-input w-full", className)}
          data-testid={`input-${props.name || 'field'}`}
          {...props}
        />
      </div>
    );
  }
);

IOSInput.displayName = "IOSInput";
