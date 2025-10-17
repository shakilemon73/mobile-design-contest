import { Shield, Star, TrendingUp, Zap } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface TrustBadgeProps {
  type: "verified" | "featured" | "top" | "pro";
  className?: string;
  size?: "sm" | "md";
  tooltip?: string;
}

export function TrustBadge({ type, className = "", size = "md", tooltip }: TrustBadgeProps) {
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

  const iconSize = size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5";
  const textSize = size === "sm" ? "text-[10px]" : "text-xs";
  const padding = size === "sm" ? "px-2 py-0.5" : "px-2.5 py-1";

  const BadgeContent = (
    <div className={`inline-flex items-center gap-1.5 ${padding} rounded-full ${badge.bg} ${className}`}>
      <Icon className={`${iconSize} ${badge.color}`} />
      <span className={`${textSize} font-medium ${badge.color}`}>{badge.label}</span>
    </div>
  );

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{BadgeContent}</TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    );
  }

  return BadgeContent;
}
