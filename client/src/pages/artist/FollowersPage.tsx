import { UserPlus, Check, Users2, Clock } from "lucide-react";
import { useState } from "react";
import { BlurCard } from "@/components/ios/BlurCard";
import { IOSButton } from "@/components/ios/IOSButton";
import { LargeTitle } from "@/components/ios/LargeTitle";
import { PageContainer } from "@/components/ios/PageContainer";
import { TrustBadge } from "@/components/TrustBadge";

export default function FollowersPage() {
  const [following, setFollowing] = useState<Set<string>>(new Set(["1", "3", "5"]));
  const [activeTab, setActiveTab] = useState<"followers" | "following" | "suggested">("followers");

  const followers = [
    { id: "1", name: "Creative Studios", type: "Producer", avatar: "CS", verified: true, online: true, mutual: true, lastActive: "2h ago" },
    { id: "2", name: "Gaming Voice Co", type: "Producer", avatar: "GV", verified: false, online: false, mutual: false, lastActive: "1d ago" },
    { id: "3", name: "Sarah Mitchell", type: "Artist", avatar: "SM", verified: true, online: true, mutual: true, lastActive: "Online" },
    { id: "4", name: "Animation Hub", type: "Producer", avatar: "AH", verified: true, online: false, mutual: false, lastActive: "3h ago" },
    { id: "5", name: "James Anderson", type: "Artist", avatar: "JA", verified: false, online: true, mutual: true, lastActive: "Online" },
    { id: "6", name: "Documentary Films", type: "Producer", avatar: "DF", verified: true, online: false, mutual: false, lastActive: "5h ago" },
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

  const followersCount = followers.length;
  const followingCount = following.size;

  return (
    <PageContainer>
      <div className="min-h-screen bg-background pb-20">
        <LargeTitle title="Network" />

        <div className="px-6 space-y-6">
          {/* Stats Cards */}
          <div className="flex gap-4">
            <BlurCard className="flex-1 text-center" size="compact">
              <div className="title-2">{followersCount}</div>
              <div className="caption-1 text-muted-foreground">Followers</div>
            </BlurCard>
            <BlurCard className="flex-1 text-center" size="compact">
              <div className="title-2">{followingCount}</div>
              <div className="caption-1 text-muted-foreground">Following</div>
            </BlurCard>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            {(["followers", "following", "suggested"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Followers List */}
          <div className="space-y-3">
            {followers.map((follower) => {
              const isFollowing = following.has(follower.id);
              return (
                <BlurCard key={follower.id} size="compact">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center headline text-primary flex-shrink-0 relative">
                      {follower.avatar}
                      {follower.online && (
                        <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 bg-[hsl(var(--brand-green))] rounded-full border-2 border-background" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="headline">{follower.name}</div>
                        {follower.verified && (
                          <TrustBadge type="verified" size="sm" />
                        )}
                      </div>
                      <div className="caption-1 text-muted-foreground flex items-center gap-2">
                        <span>{follower.type}</span>
                        {follower.mutual && (
                          <>
                            <span>·</span>
                            <div className="flex items-center gap-1">
                              <Users2 className="h-3 w-3" />
                              <span>Mutual</span>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="caption-1 text-muted-foreground/60 flex items-center gap-1 mt-0.5">
                        <Clock className="h-3 w-3" />
                        <span>{follower.lastActive}</span>
                      </div>
                    </div>

                    <IOSButton
                      onClick={() => toggleFollow(follower.id)}
                      variant={isFollowing ? "secondary" : "primary"}
                      size="compact"
                      className="flex-shrink-0"
                      data-testid={`button-follow-${follower.id}`}
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
