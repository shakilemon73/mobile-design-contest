import { useState } from "react";
import FollowerCard from "@/components/FollowerCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function FollowersPage() {
  const [followers, setFollowers] = useState([
    { id: "1", name: "Producer 1" },
    { id: "2", name: "Producer 2" },
    { id: "3", name: "Producer 3" },
    { id: "4", name: "Producer 4" },
  ]);

  const handleRemove = (id: string, name: string) => {
    setFollowers(followers.filter((f) => f.id !== id));
    console.log(`Removed follower: ${name}`);
  };

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-background z-10 p-4 border-b">
        <h1 className="text-2xl font-bold mb-4">My Followers</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search followers..."
            className="pl-10"
            data-testid="input-search-followers"
          />
        </div>
      </div>

      <div className="p-4 space-y-3">
        {followers.map((follower) => (
          <FollowerCard
            key={follower.id}
            name={follower.name}
            onRemove={() => handleRemove(follower.id, follower.name)}
          />
        ))}
      </div>
    </div>
  );
}
