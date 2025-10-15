import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserMinus } from "lucide-react";

interface FollowerCardProps {
  name: string;
  avatarUrl?: string;
  onRemove?: () => void;
}

export default function FollowerCard({ name, avatarUrl, onRemove }: FollowerCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="p-4 hover-elevate">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold truncate" data-testid={`text-follower-${name}`}>
            {name}
          </h4>
        </div>
        {onRemove && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onRemove}
            data-testid={`button-remove-${name}`}
            className="gap-2"
          >
            <UserMinus className="h-4 w-4" />
            Remove
          </Button>
        )}
      </div>
    </Card>
  );
}
