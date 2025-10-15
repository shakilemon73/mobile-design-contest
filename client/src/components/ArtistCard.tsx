import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface ArtistCardProps {
  name: string;
  bio?: string;
  avatarUrl?: string;
  onPlay?: () => void;
  onClick?: () => void;
}

export default function ArtistCard({ name, bio, avatarUrl, onPlay, onClick }: ArtistCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card
      className="p-4 hover-elevate cursor-pointer"
      onClick={onClick}
      data-testid={`artist-${name}`}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="font-semibold">{name}</h4>
          {bio && (
            <p className="text-xs text-muted-foreground line-clamp-2">{bio}</p>
          )}
        </div>
        {onPlay && (
          <Button
            size="sm"
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              onPlay();
            }}
            data-testid={`button-play-artist-${name}`}
            className="gap-2"
          >
            <Play className="h-3 w-3" />
            Play Demo
          </Button>
        )}
      </div>
    </Card>
  );
}
