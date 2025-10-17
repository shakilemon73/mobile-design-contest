import { useState } from "react";
import { Share2, QrCode, MapPin, Globe, MessageCircle } from "lucide-react";
import { BlurCard } from "@/components/ios/BlurCard";
import { IOSButton } from "@/components/ios/IOSButton";
import { LargeTitle } from "@/components/ios/LargeTitle";
import { PageContainer } from "@/components/ios/PageContainer";
import { TrustBadge } from "@/components/TrustBadge";
import { InlineAudioPlayer } from "@/components/InlineAudioPlayer";

export default function ProfilePage() {
  const [currentDemo, setCurrentDemo] = useState<number | null>(null);

  const demos = [
    { id: "1", title: "Commercial Voice Over", duration: "0:45", plays: "1.2K" },
    { id: "2", title: "Video Game Character", duration: "1:23", plays: "856" },
    { id: "3", title: "Documentary Narration", duration: "2:10", plays: "2.1K" },
    { id: "4", title: "Animation Voice", duration: "1:05", plays: "645" },
  ];

  return (
    <PageContainer>
      <div className="min-h-screen bg-background pb-24">
        <LargeTitle title="Profile" />

        <div className="px-6 space-y-6">
        <BlurCard>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 relative">
                <span className="title-1 text-primary">RC</span>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-[hsl(var(--brand-green))] rounded-full border-2 border-background" title="Online now" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="title-2">Robin Cousins</h2>
                </div>
                <div className="flex items-center gap-1.5 subheadline text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>London, UK</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <TrustBadge type="verified" />
              <TrustBadge type="top" />
              <TrustBadge type="pro" />
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

            <div className="space-y-3">
              <p className="body text-foreground/90">
                Professional voice artist specializing in commercial, gaming, and documentary work. 
                10+ years bringing stories to life.
              </p>
              
              <div className="flex items-center gap-4 caption-1 text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Globe className="h-4 w-4" />
                  <span>English, Spanish</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" />
                  <span>Responds in 2h</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <IOSButton 
                variant="primary" 
                className="flex-1"
                data-testid="button-hire"
              >
                Request Quote
              </IOSButton>
              <button 
                className="h-12 px-4 rounded-full bg-secondary hover:opacity-90 active:scale-95 flex items-center justify-center gap-2 transition-all"
                data-testid="button-share"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </BlurCard>

        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="title-3">Voice Demos</h3>
            <span className="caption-1 text-muted-foreground">{demos.length} total</span>
          </div>

          <div className="space-y-3">
            {demos.map((demo, index) => {
              const isPlaying = currentDemo === index;
              return (
                <InlineAudioPlayer
                  key={demo.id}
                  id={demo.id}
                  title={demo.title}
                  duration={demo.duration}
                  plays={demo.plays}
                  isPlaying={isPlaying}
                  onToggle={() => setCurrentDemo(isPlaying ? null : index)}
                  onPlaybackStart={(id) => console.log(`Started playing demo ${id}`)}
                />
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </PageContainer>
  );
}
