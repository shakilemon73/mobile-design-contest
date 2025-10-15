import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserMinus, MessageCircle } from "lucide-react";

interface FollowerCardProps {
  name: string;
  bio?: string;
  avatarUrl?: string;
  onRemove?: () => void;
  onMessage?: () => void;
}

export default function FollowerCard({ name, bio, avatarUrl, onRemove, onMessage }: FollowerCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="p-4 hover-elevate">
      <div className="flex items-center gap-4">
        <Avatar className="h-14 w-14 border-2 border-muted">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="font-semibold">{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0 space-y-1">
          <h4 className="font-semibold text-base" data-testid={`text-follower-${name}`}>
            {name}
          </h4>
          {bio && (
            <p className="text-sm text-muted-foreground line-clamp-1">{bio}</p>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {onMessage && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMessage}
              data-testid={`button-message-${name}`}
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          )}
          {onRemove && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onRemove}
              data-testid={`button-remove-${name}`}
            >
              <UserMinus className="h-4 w-4 text-destructive" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
