import { Play, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DemoCardProps {
  title: string;
  duration: string;
  isPlaying?: boolean;
  onPlay: () => void;
  onMenu?: () => void;
}

export default function DemoCard({ title, duration, isPlaying, onPlay, onMenu }: DemoCardProps) {
  return (
    <Card className="p-4 hover-elevate">
      <div className="flex items-center gap-3">
        <Button
          variant={isPlaying ? "default" : "secondary"}
          size="icon"
          onClick={onPlay}
          data-testid={`button-play-${title}`}
          className={isPlaying ? "bg-primary" : ""}
        >
          <Play className="h-4 w-4" />
        </Button>
        <div className="flex-1 min-w-0">
          <div className="h-8 flex items-center gap-1">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/20 rounded-md"
                style={{
                  height: `${Math.random() * 100}%`,
                  minHeight: "20%",
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-sm font-semibold" data-testid={`text-demo-title-${title}`}>
            {title}
          </span>
          <span className="text-xs text-muted-foreground font-mono">{duration}</span>
        </div>
        {onMenu && (
          <Button variant="ghost" size="icon" onClick={onMenu} data-testid="button-demo-menu">
            <MoreVertical className="h-4 w-4" />
          </Button>
        )}
      </div>
    </Card>
  );
}
