import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

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
      className="p-4 hover-elevate cursor-pointer"
      onClick={onClick}
      data-testid={`viewer-${name}`}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold truncate">{name}</h4>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </div>
    </Card>
  );
}
