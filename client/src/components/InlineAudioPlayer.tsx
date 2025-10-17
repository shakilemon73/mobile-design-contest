import { useState } from "react";
import { Play, Pause } from "lucide-react";

interface InlineAudioPlayerProps {
  title: string;
  duration: string;
  plays?: string;
  isPlaying?: boolean;
  onToggle?: () => void;
}

export function InlineAudioPlayer({ 
  title, 
  duration, 
  plays,
  isPlaying = false,
  onToggle 
}: InlineAudioPlayerProps) {
  const [progress, setProgress] = useState(33);

  return (
    <div className={`group rounded-2xl p-4 transition-all ${
      isPlaying 
        ? 'bg-primary/5 ring-2 ring-primary/30' 
        : 'bg-secondary/50 hover:bg-secondary/70'
    }`}>
      <div className="flex items-center gap-4">
        <button
          onClick={onToggle}
          className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center transition-all ${
            isPlaying
              ? 'bg-primary text-primary-foreground scale-105'
              : 'bg-primary/10 dark:bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
          }`}
          data-testid={`button-play-${title.toLowerCase().replace(/\s+/g, '-')}`}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="headline mb-1">{title}</div>
          <div className="flex items-center gap-2 caption-1 text-muted-foreground">
            <span>{duration}</span>
            {plays && (
              <>
                <span>·</span>
                <span>{plays} plays</span>
              </>
            )}
          </div>
        </div>
      </div>

      {isPlaying && (
        <div className="mt-3">
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Waveform visualization */}
      <div className="mt-3 flex items-center gap-0.5 h-8">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 rounded-full transition-all ${
              isPlaying && i < progress / 2 
                ? 'bg-primary' 
                : 'bg-muted-foreground/20'
            }`}
            style={{
              height: `${Math.random() * 60 + 20}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
