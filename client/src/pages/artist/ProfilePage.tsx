import { useState } from "react";
import { Play, Pause, Share2, QrCode } from "lucide-react";
import { BlurCard } from "@/components/ios/BlurCard";
import { IOSButton } from "@/components/ios/IOSButton";
import { LargeTitle } from "@/components/ios/LargeTitle";

export default function ProfilePage() {
  const [currentDemo, setCurrentDemo] = useState<number | null>(null);

  const demos = [
    { id: "1", title: "Commercial Voice Over", duration: "0:45", plays: "1.2K" },
    { id: "2", title: "Video Game Character", duration: "1:23", plays: "856" },
    { id: "3", title: "Documentary Narration", duration: "2:10", plays: "2.1K" },
    { id: "4", title: "Animation Voice", duration: "1:05", plays: "645" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <LargeTitle title="Profile" />

      <div className="px-6 space-y-6">
        <BlurCard>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="title-1 text-primary">RC</span>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="title-2 mb-1">Robin Cousins</h2>
                <p className="subheadline text-muted-foreground">London, UK</p>
              </div>
            </div>

            <div className="flex items-center justify-around py-2">
              <div className="text-center">
                <div className="title-2">12</div>
                <div className="caption-1 text-muted-foreground">Demos</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="title-2">214</div>
                <div className="caption-1 text-muted-foreground">Followers</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="title-2">4.8K</div>
                <div className="caption-1 text-muted-foreground">Plays</div>
              </div>
            </div>

            <p className="body text-foreground/80">
              Professional voice artist specializing in commercial, gaming, and documentary work. 
              10+ years bringing stories to life.
            </p>

            <div className="flex gap-3">
              <IOSButton 
                variant="primary" 
                className="flex-1"
                data-testid="button-share-profile"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Profile
              </IOSButton>
              <button 
                className="h-12 w-12 rounded-full bg-secondary hover:opacity-90 active:scale-95 flex items-center justify-center transition-all"
                data-testid="button-qr-code"
              >
                <QrCode className="h-5 w-5" />
              </button>
            </div>
          </div>
        </BlurCard>

        <div className="space-y-4">
          <h3 className="title-3 px-2">Voice Demos</h3>

          {demos.map((demo, index) => {
            const isPlaying = currentDemo === index;
            return (
              <BlurCard
                key={demo.id}
                className={isPlaying ? 'ring-2 ring-primary/50' : ''}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setCurrentDemo(isPlaying ? null : index)}
                    className={`flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center transition-all ${
                      isPlaying
                        ? 'bg-primary text-primary-foreground scale-110'
                        : 'bg-primary/10 dark:bg-primary/20 text-primary active:scale-95'
                    }`}
                    data-testid={`button-play-${demo.id}`}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6 ml-0.5" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="headline mb-1">{demo.title}</div>
                    <div className="flex items-center gap-2 subheadline text-muted-foreground">
                      <span>{demo.duration}</span>
                      <span>·</span>
                      <span>{demo.plays} plays</span>
                    </div>
                  </div>
                </div>

                {isPlaying && (
                  <div className="mt-4">
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-primary rounded-full" />
                    </div>
                  </div>
                )}
              </BlurCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
