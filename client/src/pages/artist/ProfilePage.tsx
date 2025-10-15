import { useState } from "react";
import { Play, Pause, Share2, QrCode, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMark from "@assets/logo_mark_1760520832506.png";

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
      {/* Hero Header - Pablo Stanley: Clear communication */}
      <div className="relative overflow-hidden">
        {/* Peter Tarka: Bold gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-brand-coral/5 to-transparent" />
        
        {/* Luke Wroblewski: Minimal header */}
        <div className="relative px-6 pt-8 pb-6">
          <div className="flex items-center justify-between mb-8">
            <img src={logoMark} alt="" className="h-7 w-7 opacity-60" />
            <Button variant="ghost" size="sm" className="h-9 px-3 gap-2 rounded-full">
              <Share2 className="h-4 w-4" />
              <span className="text-sm font-medium">Share</span>
            </Button>
          </div>

          {/* Don Norman: Clear visual hierarchy */}
          <div className="space-y-6">
            {/* Avatar + Name */}
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary via-brand-coral to-brand-yellow p-[2px]">
                  <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-xl font-bold bg-gradient-to-br from-primary to-brand-coral bg-clip-text text-transparent">
                      RC
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 h-6 w-6 rounded-full bg-brand-yellow flex items-center justify-center border-2 border-background">
                  <span className="text-[10px] font-bold">✓</span>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-0.5">Robin Cousins</h1>
                <p className="text-sm text-muted-foreground">London, UK</p>
              </div>
            </div>

            {/* Gaurav Joshi: Clean stats display */}
            <div className="flex items-center gap-6">
              <div>
                <div className="text-xl font-bold">12</div>
                <div className="text-xs text-muted-foreground">Demos</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-xl font-bold">214</div>
                <div className="text-xs text-muted-foreground">Followers</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-xl font-bold">4.8K</div>
                <div className="text-xs text-muted-foreground">Plays</div>
              </div>
            </div>

            {/* Bio - Typography for readability */}
            <p className="text-[15px] leading-relaxed text-foreground/80">
              Professional voice artist specializing in commercial, gaming, and documentary work. 
              10+ years bringing stories to life.
            </p>

            {/* Primary CTA - Conversion focused */}
            <div className="flex gap-3">
              <Button 
                className="flex-1 h-11 bg-gradient-to-r from-primary to-brand-coral hover:opacity-90 font-semibold shadow-lg"
                data-testid="button-share-profile"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Profile
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-11 w-11 border-2"
                data-testid="button-qr-code"
              >
                <QrCode className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Demos Section - Luke: Content priority */}
      <div className="px-6 py-8 space-y-4">
        {/* Section Header - Clear labeling */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Voice Demos</h2>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-brand-green" />
            <span className="font-medium">Trending</span>
          </div>
        </div>

        {/* Demo Cards - Minimalistic, scannable */}
        {demos.map((demo, index) => {
          const isPlaying = currentDemo === index;
          return (
            <div
              key={demo.id}
              className={`group relative rounded-2xl p-5 transition-all ${
                isPlaying 
                  ? 'bg-primary/5 border-2 border-primary/30' 
                  : 'bg-card border border-border hover:border-primary/20'
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Play Button - Don Norman: Clear affordance */}
                <button
                  onClick={() => setCurrentDemo(isPlaying ? null : index)}
                  className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center transition-all ${
                    isPlaying
                      ? 'bg-primary text-primary-foreground scale-105'
                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105'
                  }`}
                  data-testid={`button-play-${demo.id}`}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5 ml-0.5" />
                  )}
                </button>

                {/* Info - Scannable hierarchy */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-base mb-1">{demo.title}</div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-mono">{demo.duration}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      <span>{demo.plays} plays</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress bar when playing */}
              {isPlaying && (
                <div className="mt-4">
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-primary rounded-full" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
