import { cn } from "@/lib/utils";

interface BlurCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: 'default' | 'compact';
}

export function BlurCard({ children, className, onClick, size = 'default' }: BlurCardProps) {
  const sizeClasses = size === 'compact' ? 'px-5 py-4' : 'p-6';
  
  return (
    <div
      className={cn(
        "blur-card rounded-3xl shadow-lg border border-white/20 dark:border-white/10 transition-all duration-200",
        sizeClasses,
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
