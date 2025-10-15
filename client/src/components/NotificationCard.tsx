import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, User as UserIcon, Clock } from "lucide-react";

interface NotificationCardProps {
  artistName: string;
  message: string;
  timestamp: string;
  avatarUrl?: string;
  isUnread?: boolean;
  type?: "demo" | "profile" | "other";
  onClick?: () => void;
}

export default function NotificationCard({
  artistName,
  message,
  timestamp,
  avatarUrl,
  isUnread,
  type = "other",
  onClick,
}: NotificationCardProps) {
  const initials = artistName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const typeIcons = {
    demo: Upload,
    profile: UserIcon,
    other: Clock,
  };
  const TypeIcon = typeIcons[type];

  return (
    <Card
      className={`p-4 hover-elevate cursor-pointer group transition-all ${
        isUnread ? "border-l-4 border-l-brand-yellow bg-brand-yellow/5" : ""
      }`}
      onClick={onClick}
      data-testid={`notification-${artistName}`}
    >
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatarUrl} alt={artistName} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-background border-2 border-background flex items-center justify-center">
            <TypeIcon className="h-3 w-3 text-muted-foreground" />
          </div>
        </div>
        <div className="flex-1 min-w-0 space-y-1.5">
          <p className="text-sm leading-relaxed">
            <span className="font-semibold text-foreground">{artistName}</span>
            <span className="text-muted-foreground"> {message}</span>
          </p>
          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground font-medium">{timestamp}</p>
            {isUnread && (
              <Badge className="bg-brand-yellow text-white text-xs px-2 py-0">New</Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
