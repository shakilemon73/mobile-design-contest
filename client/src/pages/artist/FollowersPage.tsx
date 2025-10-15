import { Search, UserPlus, Check, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function FollowersPage() {
  const [following, setFollowing] = useState<Set<string>>(new Set(["1", "3", "5"]));
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="min-h-screen bg-background pb-20">
      {/* Header - Clear hierarchy */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10">
        <div className="px-6 py-5">
          <h1 className="text-2xl font-bold mb-4">Network</h1>
          
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search your network..."
              className="pl-10 h-11 rounded-full bg-muted/50 border-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-followers"
            />
          </div>

          {/* Stats - Gaurav: Clean metrics */}
          <div className="flex items-center gap-4">
            <div className="flex-1 rounded-xl p-3 bg-card border border-border">
              <div className="text-2xl font-bold mb-0.5">{followersCount}</div>
              <div className="text-xs text-muted-foreground">Followers</div>
            </div>
            <div className="flex-1 rounded-xl p-3 bg-card border border-border">
              <div className="text-2xl font-bold mb-0.5">{followingCount}</div>
              <div className="text-xs text-muted-foreground">Following</div>
            </div>
            <div className="flex-1 rounded-xl p-3 bg-brand-green/5 border border-brand-green/20">
              <div className="flex items-center gap-1 text-brand-green mb-0.5">
                <TrendingUp className="h-3.5 w-3.5" />
                <span className="text-2xl font-bold">98%</span>
              </div>
              <div className="text-xs text-brand-green/80 font-medium">Engagement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Followers List - Pablo: Clear visual feedback */}
      <div className="px-6 py-4 space-y-2">
        {followers.map((follower) => {
          const isFollowing = following.has(follower.id);
          return (
            <div 
              key={follower.id} 
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/10 to-brand-coral/10 flex items-center justify-center font-semibold text-sm">
                  {follower.avatar}
                </div>
                {follower.verified && (
                  <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-brand-yellow flex items-center justify-center border border-background">
                    <span className="text-[8px] font-bold">✓</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm mb-0.5">{follower.name}</div>
                <div className="text-xs text-muted-foreground">{follower.type}</div>
              </div>

              {/* Follow Button - Luke: Clear CTA */}
              <Button
                onClick={() => toggleFollow(follower.id)}
                variant={isFollowing ? "outline" : "default"}
                size="sm"
                className={`h-9 px-4 rounded-full font-medium flex-shrink-0 ${
                  isFollowing 
                    ? 'border-border' 
                    : 'bg-gradient-to-r from-primary to-brand-coral'
                }`}
                data-testid={`button-follow-${follower.id}`}
              >
                {isFollowing ? (
                  <>
                    <Check className="h-3 w-3 mr-1.5" />
                    Following
                  </>
                ) : (
                  <>
                    <UserPlus className="h-3 w-3 mr-1.5" />
                    Follow
                  </>
                )}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
