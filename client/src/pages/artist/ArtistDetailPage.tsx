import { useState } from "react";
import { Share, Instagram, Twitter, Globe, MapPin } from "lucide-react";
import { useRoute } from "wouter";
import { LargeTitle } from "@/components/ios/LargeTitle";
import { PageContainer } from "@/components/ios/PageContainer";
import { BlurCard } from "@/components/ios/BlurCard";
import { IOSButton } from "@/components/ios/IOSButton";
import { TrustBadge } from "@/components/TrustBadge";
import { InlineAudioPlayer } from "@/components/InlineAudioPlayer";

export default function ArtistDetailPage() {
  const [, params] = useRoute("/profile/:id");
  const artistId = params?.id || "unknown";
  const [currentDemo, setCurrentDemo] = useState<number | null>(null);

  const artist = {
    name: `Artist ${artistId}`,
    specialty: "Commercial & Gaming",
    location: "Los Angeles, CA",
    verified: true,
    online: true,
    bio: "Professional voice artist with 10+ years of experience in commercial, gaming, and animation. Known for versatile character work and authentic emotional delivery.",
    demos: [
      { id: "1", title: "Commercial Demo", duration: "1:30", plays: "2.3K" },
      { id: "2", title: "Character Reel", duration: "2:15", plays: "1.8K" },
    ]
  };

  return (
    <PageContainer>
      <div className="min-h-screen bg-background pb-20">
        <LargeTitle title={artist.name} />

        <div className="px-6 space-y-6">
          <BlurCard>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 relative">
                  <span className="title-1 text-primary">UN</span>
                  {artist.online && (
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-[hsl(var(--brand-green))] rounded-full border-2 border-background" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="headline">{artist.specialty}</div>
                  </div>
                  <div className="flex items-center gap-1.5 caption-1 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{artist.location}</span>
                  </div>
                </div>
              </div>

              {artist.verified && (
                <div className="flex gap-2">
                  <TrustBadge type="verified" />
                  <TrustBadge type="top" />
                </div>
              )}

              <p className="body text-foreground/90">{artist.bio}</p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors" data-testid="link-instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors" data-testid="link-twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors" data-testid="link-website">
                  <Globe className="h-5 w-5" />
                </a>
              </div>

              <IOSButton variant="primary" className="w-full" data-testid="button-share">
                <Share className="h-4 w-4 mr-2" />
                Share Profile
              </IOSButton>
            </div>
          </BlurCard>

          {/* Demos */}
          <div className="space-y-3">
            <h3 className="title-3 px-2">Voice Demos</h3>
            {artist.demos.map((demo, index) => (
              <InlineAudioPlayer
                key={demo.id}
                id={demo.id}
                title={demo.title}
                duration={demo.duration}
                plays={demo.plays}
                isPlaying={currentDemo === index}
                onToggle={() => setCurrentDemo(currentDemo === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
