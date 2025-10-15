import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NotificationCardProps {
  artistName: string;
  message: string;
  timestamp: string;
  avatarUrl?: string;
  isUnread?: boolean;
  onClick?: () => void;
}

export default function NotificationCard({
  artistName,
  message,
  timestamp,
  avatarUrl,
  isUnread,
  onClick,
}: NotificationCardProps) {
  const initials = artistName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card
      className={`p-4 hover-elevate cursor-pointer ${isUnread ? "border-l-4 border-l-brand-yellow" : ""}`}
      onClick={onClick}
      data-testid={`notification-${artistName}`}
    >
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatarUrl} alt={artistName} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-sm">
            <span className="font-semibold">{artistName}</span> - {message}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{timestamp}</p>
        </div>
        {isUnread && <Badge className="bg-brand-yellow text-white">New</Badge>}
      </div>
    </Card>
  );
}
