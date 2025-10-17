import { UserPlus, Check, Star, Play } from "lucide-react";
import { useState } from "react";
import { BlurCard } from "@/components/ios/BlurCard";
import { IOSButton } from "@/components/ios/IOSButton";
import { LargeTitle } from "@/components/ios/LargeTitle";
import { PageContainer } from "@/components/ios/PageContainer";
import { TrustBadge } from "@/components/TrustBadge";

export default function ConnectionsPage() {
  const [following, setFollowing] = useState<Set<string>>(new Set(["1", "3"]));

  const artists = [
    { id: "1", name: "Robin Cousins", specialty: "Commercial & Gaming", avatar: "RC", verified: true, online: true, rating: 4.9, demos: 12 },
    { id: "2", name: "Sarah Mitchell", specialty: "Animation", avatar: "SM", verified: false, online: false, rating: 4.8, demos: 8 },
    { id: "3", name: "James Anderson", specialty: "Documentary", avatar: "JA", verified: true, online: true, rating: 5.0, demos: 15 },
    { id: "4", name: "Emily Chen", specialty: "Multi-lingual", avatar: "EC", verified: false, online: true, rating: 4.7, demos: 10 },
    { id: "5", name: "Michael Brown", specialty: "Video Games", avatar: "MB", verified: true, online: false, rating: 4.9, demos: 9 },
    { id: "6", name: "Lisa Taylor", specialty: "Advertising", avatar: "LT", verified: false, online: true, rating: 4.6, demos: 7 },
  ];

  const toggleFollow = (id: string) => {
    const newFollowing = new Set(following);
    if (newFollowing.has(id)) {
      newFollowing.delete(id);
    } else {
      newFollowing.add(id);
    }
    setFollowing(newFollowing);
  };

  return (
    <PageContainer>
      <div className="min-h-screen bg-background pb-20">
        <LargeTitle title="Connections" />

        <div className="px-6 space-y-6">
          <BlurCard size="compact">
            <div className="flex items-center justify-around">
              <div className="text-center">
                <div className="title-2">{following.size}</div>
                <div className="caption-1 text-muted-foreground">Following</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="title-2">{artists.length}</div>
                <div className="caption-1 text-muted-foreground">Artists</div>
              </div>
            </div>
          </BlurCard>

          <div className="space-y-3">
            {artists.map((artist) => {
              const isFollowing = following.has(artist.id);
              return (
                <BlurCard key={artist.id} size="compact">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center headline text-primary flex-shrink-0 relative">
                      {artist.avatar}
                      {artist.online && (
                        <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 bg-[hsl(var(--brand-green))] rounded-full border-2 border-background" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="headline truncate">{artist.name}</div>
                        {artist.verified && <TrustBadge type="verified" size="sm" />}
                      </div>
                      <div className="caption-1 text-muted-foreground truncate">{artist.specialty}</div>
                      <div className="flex items-center gap-2 caption-1 text-muted-foreground mt-0.5">
                        <Play className="h-3 w-3" />
                        <span>{artist.demos} demos</span>
                        <span>·</span>
                        <Star className="h-3 w-3 text-primary fill-primary" />
                        <span>{artist.rating}</span>
                      </div>
                    </div>

                    <IOSButton
                      onClick={() => toggleFollow(artist.id)}
                      variant={isFollowing ? "secondary" : "primary"}
                      size="compact"
                      className="flex-shrink-0"
                      data-testid={`button-follow-${artist.id}`}
                    >
                      {isFollowing ? (
                        <>
                          <Check className="h-4 w-4 mr-1.5" />
                          Following
                        </>
                      ) : (
                        <>
                          <UserPlus className="h-4 w-4 mr-1.5" />
                          Follow
                        </>
                      )}
                    </IOSButton>
                  </div>
                </BlurCard>
              );
            })}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
