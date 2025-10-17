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
    <div className="fixed bottom-16 left-0 right-0 blur-card z-40">
      <div className="w-full max-w-[430px] mx-auto px-6 py-4">
        <Slider
          value={[progress]}
          onValueChange={(v) => setProgress(v[0])}
          max={100}
          step={1}
          className="w-full mb-4"
          aria-label="Playback progress"
        />

        <div className="flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="subheadline font-semibold truncate mb-0.5">{currentDemo.title}</div>
            <div className="caption-1 text-muted-foreground">
              0:00 / {currentDemo.duration}
            </div>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="h-10 w-10 rounded-full active:scale-90 transition-all"
              aria-label="Previous track"
            >
              <SkipBack className="h-5 w-5" />
            </Button>

            <Button
              onClick={togglePlay}
              size="icon"
              className="h-12 w-12 rounded-full bg-primary hover:opacity-90 shadow-lg active:scale-95 transition-all"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex === demos.length - 1}
              className="h-10 w-10 rounded-full active:scale-90 transition-all"
              aria-label="Next track"
            >
              <SkipForward className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLiked(!isLiked)}
              className="h-10 w-10 rounded-full active:scale-90 transition-all"
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
