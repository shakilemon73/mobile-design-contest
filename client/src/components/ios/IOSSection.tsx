import { cn } from "@/lib/utils";

interface IOSSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function IOSSection({ title, children, className }: IOSSectionProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {title && (
        <h3 className="caption-2 uppercase text-muted-foreground px-6 tracking-wider">
          {title}
        </h3>
      )}
      <div className="bg-card rounded-3xl overflow-hidden mx-4 border border-border/50">
        {children}
      </div>
    </div>
  );
}
