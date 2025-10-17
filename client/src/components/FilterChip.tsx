import { X } from "lucide-react";

interface FilterChipProps {
  label: string;
  active?: boolean;
  onToggle?: () => void;
  onRemove?: () => void;
}

export function FilterChip({ label, active = false, onToggle, onRemove }: FilterChipProps) {
  return (
    <button
      onClick={onToggle}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
        active
          ? 'bg-primary text-primary-foreground'
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
      }`}
      data-testid={`filter-${label.toLowerCase()}`}
    >
      {label}
      {active && onRemove && (
        <X 
          className="h-3.5 w-3.5 ml-0.5" 
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        />
      )}
    </button>
  );
}
