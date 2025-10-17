import { UserPlus, Check } from "lucide-react";
import { useState } from "react";
import { BlurCard } from "@/components/ios/BlurCard";
import { IOSButton } from "@/components/ios/IOSButton";
import { LargeTitle } from "@/components/ios/LargeTitle";
import { PageContainer } from "@/components/ios/PageContainer";

export default function FollowersPage() {
  const [following, setFollowing] = useState<Set<string>>(new Set(["1", "3", "5"]));

  const followers = [
    { id: "1", name: "Creative Studios", type: "Producer", avatar: "CS", verified: true },
    { id: "2", name: "Gaming Voice Co", type: "Producer", avatar: "GV", verified: false },
    { id: "3", name: "Sarah Mitchell", type: "Artist", avatar: "SM", verified: true },
    { id: "4", name: "Animation Hub", type: "Producer", avatar: "AH", verified: true },
    { id: "5", name: "James Anderson", type: "Artist", avatar: "JA", verified: false },
    { id: "6", name: "Documentary Films", type: "Producer", avatar: "DF", verified: true },
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

        <div className="space-y-3">
          {followers.map((follower) => {
            const isFollowing = following.has(follower.id);
            return (
              <BlurCard key={follower.id} size="compact">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center headline text-primary flex-shrink-0">
                    {follower.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="headline mb-0.5">{follower.name}</div>
                    <div className="caption-1 text-muted-foreground">{follower.type}</div>
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
