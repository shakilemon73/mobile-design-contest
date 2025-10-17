import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface IOSListItemProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
  onClick?: () => void;
  showChevron?: boolean;
}

export function IOSListItem({
  title,
  subtitle,
  icon,
  trailing,
  onClick,
  showChevron = true,
}: IOSListItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 transition-all duration-200",
        onClick && "cursor-pointer active:bg-secondary/50"
      )}
      onClick={onClick}
      data-testid={`list-item-${title.toLowerCase().replace(/\s/g, '-')}`}
    >
      {icon && <div className="flex-shrink-0">{icon}</div>}
      <div className="flex-1 min-w-0">
        <p className="body font-medium truncate">{title}</p>
        {subtitle && (
          <p className="footnote text-muted-foreground truncate">{subtitle}</p>
        )}
      </div>
      {trailing && <div className="flex-shrink-0">{trailing}</div>}
      {onClick && showChevron && (
        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      )}
    </div>
  );
}
