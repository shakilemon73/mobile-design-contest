import { X, LucideIcon } from "lucide-react";

interface FilterChipProps {
  label: string;
  active?: boolean;
  onToggle?: () => void;
  onRemove?: () => void;
  icon?: LucideIcon;
  count?: number;
}

export function FilterChip({ label, active = false, onToggle, onRemove, icon: Icon, count }: FilterChipProps) {
  return (
    <button
      onClick={onToggle}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        active
          ? 'bg-primary text-primary-foreground'
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
      }`}
      data-testid={`filter-${label.toLowerCase()}`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {label}
      {count !== undefined && (
        <span className="ml-1 px-1.5 py-0.5 rounded-full bg-background/20 text-xs">
          {count}
        </span>
      )}
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
