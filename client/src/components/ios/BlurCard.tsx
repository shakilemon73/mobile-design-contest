import { cn } from "@/lib/utils";

interface BlurCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function BlurCard({ children, className, onClick }: BlurCardProps) {
  return (
    <div
      className={cn(
        "blur-card rounded-3xl p-6 shadow-lg border border-white/20 dark:border-white/10 transition-all duration-200",
        onClick && "cursor-pointer active:scale-[0.98]",
        className
      )}
      onClick={onClick}
      data-testid="blur-card"
    >
      {children}
    </div>
  );
}
