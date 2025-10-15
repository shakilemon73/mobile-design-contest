import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState, useRef, useEffect } from "react";

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
  const [currentTime, setCurrentTime] = useState("0:00");

  const currentDemo = demos[currentIndex];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? "Paused" : "Playing");
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onDemoChange(currentIndex - 1);
      setProgress(0);
      setCurrentTime("0:00");
    }
  };

  const handleNext = () => {
    if (currentIndex < demos.length - 1) {
      onDemoChange(currentIndex + 1);
      setProgress(0);
      setCurrentTime("0:00");
    }
  };

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0]);
    const totalSeconds = parseDuration(currentDemo.duration);
    const currentSeconds = Math.floor((value[0] / 100) * totalSeconds);
    setCurrentTime(formatTime(currentSeconds));
  };

  const parseDuration = (duration: string): number => {
    const parts = duration.split(":");
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-card-border z-40">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm truncate" data-testid="text-current-demo">
                {currentDemo.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {currentTime} / {currentDemo.duration}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                data-testid="button-previous"
              >
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button
                variant="default"
                size="icon"
                onClick={togglePlay}
                data-testid="button-play-pause"
                className="bg-primary hover:bg-primary/90"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                disabled={currentIndex === demos.length - 1}
                data-testid="button-next"
              >
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Slider
            value={[progress]}
            onValueChange={handleProgressChange}
            max={100}
            step={1}
            className="w-full"
            data-testid="slider-progress"
          />
        </div>
      </div>
    </div>
  );
}
