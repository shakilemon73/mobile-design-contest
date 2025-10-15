import { Play, Pause, SkipBack, SkipForward, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface AudioPlayerProps {
  demos: {
    id: string;
    title: string;
    duration: string;
  }[];
  currentIndex: number;
  onDemoChange: (index: number) => void;
}

export default function AudioPlayer({ demos, currentIndex, onDemoChange }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const currentDemo = demos[currentIndex];

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      onDemoChange(currentIndex - 1);
      setProgress(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < demos.length - 1) {
      onDemoChange(currentIndex + 1);
      setProgress(0);
    }
  };

  return (
    // Gaurav: Clean, minimal player design
    <div className="fixed bottom-16 left-0 right-0 bg-card/98 backdrop-blur-xl border-t border-border z-40 shadow-2xl">
      <div className="w-full max-w-[430px] mx-auto px-5 py-4">
        {/* Progress Bar - Luke: Touch-friendly */}
        <Slider
          value={[progress]}
          onValueChange={(v) => setProgress(v[0])}
          max={100}
          step={1}
          className="w-full mb-4"
          aria-label="Playback progress"
        />

        {/* Player Controls */}
        <div className="flex items-center gap-4">
          {/* Track Info - Typography */}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm truncate mb-0.5">{currentDemo.title}</div>
            <div className="text-xs text-muted-foreground font-mono">
              0:00 / {currentDemo.duration}
            </div>
          </div>

          {/* Controls - Don Norman: Clear affordances */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="h-9 w-9"
              aria-label="Previous track"
            >
              <SkipBack className="h-4 w-4" />
            </Button>

            {/* Primary Play Button */}
            <Button
              onClick={togglePlay}
              size="icon"
              className="h-11 w-11 rounded-full bg-gradient-to-r from-primary to-brand-coral hover:opacity-90 shadow-lg"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex === demos.length - 1}
              className="h-9 w-9"
              aria-label="Next track"
            >
              <SkipForward className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLiked(!isLiked)}
              className="h-9 w-9"
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              <Heart className={`h-5 w-5 transition-all ${isLiked ? 'fill-primary text-primary scale-110' : ''}`} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
