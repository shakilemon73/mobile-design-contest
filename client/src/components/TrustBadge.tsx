import { Shield, Star, TrendingUp, Zap } from "lucide-react";

interface TrustBadgeProps {
  type: "verified" | "featured" | "top" | "pro";
  className?: string;
}

export function TrustBadge({ type, className = "" }: TrustBadgeProps) {
  const badges = {
    verified: {
      icon: Shield,
      label: "Verified",
      color: "text-[hsl(var(--brand-cyan))]",
      bg: "bg-[hsl(var(--brand-cyan))]/10"
    },
    featured: {
      icon: Star,
      label: "Featured",
      color: "text-[hsl(var(--brand-yellow))]",
      bg: "bg-[hsl(var(--brand-yellow))]/10"
    },
    top: {
      icon: TrendingUp,
      label: "Top 10%",
      color: "text-[hsl(var(--brand-green))]",
      bg: "bg-[hsl(var(--brand-green))]/10"
    },
    pro: {
      icon: Zap,
      label: "Pro",
      color: "text-primary",
      bg: "bg-primary/10"
    }
  };

  const badge = badges[type];
  const Icon = badge.icon;

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${badge.bg} ${className}`}>
      <Icon className={`h-3.5 w-3.5 ${badge.color}`} />
      <span className={`text-xs font-medium ${badge.color}`}>{badge.label}</span>
    </div>
  );
}
