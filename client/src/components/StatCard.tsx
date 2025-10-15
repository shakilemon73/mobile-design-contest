import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  color?: string;
}

export default function StatCard({ icon: Icon, value, label, color = "text-primary" }: StatCardProps) {
  return (
    <Card className="p-6 flex flex-col items-center justify-center gap-2">
      <Icon className={`h-6 w-6 ${color}`} />
      <div className="text-3xl font-bold" data-testid={`stat-${label.toLowerCase()}`}>
        {value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </Card>
  );
}
