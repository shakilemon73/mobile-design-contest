import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  trend?: string;
  color?: string;
}

export default function StatCard({ 
  icon: Icon, 
  value, 
  label, 
  trend,
  color = "text-primary" 
}: StatCardProps) {
  return (
    <Card className="p-6 hover-elevate">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className={`h-12 w-12 rounded-full bg-gradient-to-br from-${color.replace('text-', '')}/10 to-${color.replace('text-', '')}/5 flex items-center justify-center`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid={`stat-${label.toLowerCase()}`}>
            {value.toLocaleString()}
          </div>
          <div className="text-sm font-medium text-muted-foreground">{label}</div>
          {trend && (
            <div className="text-xs text-brand-green font-medium">{trend}</div>
          )}
        </div>
      </div>
    </Card>
  );
}
