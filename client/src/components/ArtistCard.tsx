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
      className="p-5 hover-elevate cursor-pointer group"
      onClick={onClick}
      data-testid={`artist-${name}`}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <Avatar className="h-20 w-20 border-2 border-muted group-hover:border-primary transition-colors">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="text-lg font-semibold">{initials}</AvatarFallback>
        </Avatar>
        <div className="space-y-2 w-full">
          <h4 className="font-semibold text-base leading-tight">{name}</h4>
          {bio && (
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{bio}</p>
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
            className="gap-2 w-full"
          >
            <Play className="h-3.5 w-3.5" />
            Play Demo
          </Button>
        )}
      </div>
    </Card>
  );
}
