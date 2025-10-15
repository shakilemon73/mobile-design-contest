import { Play, Pause, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DemoCardProps {
  title: string;
  duration: string;
  plays?: number;
  isPlaying?: boolean;
  onPlay: () => void;
  onMenu?: () => void;
}

export default function DemoCard({ 
  title, 
  duration, 
  plays,
  isPlaying, 
  onPlay, 
  onMenu 
}: DemoCardProps) {
  return (
    <Card className="p-6 hover-elevate group transition-all duration-200">
      <div className="flex items-center gap-5">
        {/* Don Norman: Clear affordance with large touch target (Luke: 44px minimum) */}
        <Button
          variant={isPlaying ? "default" : "secondary"}
          size="icon"
          onClick={onPlay}
          data-testid={`button-play-${title}`}
          aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
          className={`h-14 w-14 rounded-full flex-shrink-0 shadow-md transition-all duration-300 ${
            isPlaying ? "bg-primary scale-105" : "hover:scale-105"
          }`}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6 ml-0.5" />
          )}
        </Button>
        
        <div className="flex-1 min-w-0 space-y-3">
          {/* Steve Krug: Scannable hierarchy, clear information */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg leading-tight truncate" data-testid={`text-demo-title-${title}`}>
                {title}
              </h3>
              {/* Susan Weinschenk: Recognition over recall - show duration clearly */}
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm text-muted-foreground font-mono">{duration}</span>
                {plays !== undefined && (
                  <Badge variant="secondary" className="text-xs font-medium">
                    {plays.toLocaleString()} plays
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          {/* Jonathan Ive: Attention to detail in waveform visualization */}
          {/* Aarron Walter: Delightful micro-interaction */}
          <div className="h-12 flex items-center gap-0.5 rounded-lg overflow-hidden bg-muted/40 p-1">
            {[...Array(60)].map((_, i) => {
              const height = Math.sin(i / 3) * 50 + Math.random() * 50;
              return (
                <div
                  key={i}
                  className={`flex-1 rounded-sm transition-all duration-300 ${
                    isPlaying 
                      ? "bg-primary animate-pulse" 
                      : "bg-primary/30 group-hover:bg-primary/50"
                  }`}
                  style={{
                    height: `${height}%`,
                    minHeight: "30%",
                    animationDelay: `${i * 20}ms`,
                  }}
                />
              );
            })}
          </div>
        </div>
        
        {/* Alan Cooper: Direct manipulation - visible on hover (Forgiveness) */}
        {onMenu && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onMenu} 
            data-testid="button-demo-menu"
            aria-label={`More options for ${title}`}
            className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-11 w-11"
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        )}
      </div>
    </Card>
  );
}
