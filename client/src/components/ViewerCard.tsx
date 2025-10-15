import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";

interface ViewerCardProps {
  name: string;
  date: string;
  avatarUrl?: string;
  onClick?: () => void;
}

export default function ViewerCard({ name, date, avatarUrl, onClick }: ViewerCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card
      className="p-4 hover-elevate cursor-pointer group"
      onClick={onClick}
      data-testid={`viewer-${name}`}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="h-11 w-11">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="text-sm font-semibold">{initials}</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-0.5 -right-0.5 h-5 w-5 rounded-full bg-brand-cyan/10 border-2 border-background flex items-center justify-center">
            <Eye className="h-2.5 w-2.5 text-brand-cyan" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{name}</h4>
          <p className="text-xs text-muted-foreground font-medium mt-0.5">{date}</p>
        </div>
      </div>
    </Card>
  );
}
