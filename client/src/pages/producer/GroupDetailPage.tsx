import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRoute } from "wouter";

export default function GroupDetailPage() {
  const [, params] = useRoute("/group/:id");
  const groupId = params?.id || "unknown";
  
  // In a real app, you'd fetch group data and artists based on groupId
  const groupName = `Group ${groupId}`;
  
  const artists = [
    { id: "1", name: "Artist 1", avatar: "A1" },
    { id: "2", name: "Artist 2", avatar: "A2" },
    { id: "3", name: "Artist 3", avatar: "A3" },
    { id: "4", name: "Artist 4", avatar: "A4" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10 px-6 py-5">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-1">{groupName}</h1>
          <p className="text-sm text-muted-foreground">{artists.length} artists</p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search in this group..."
            className="pl-10 h-11 rounded-full bg-muted/50"
            data-testid="input-search-group"
          />
        </div>
      </div>

      {/* Artists List */}
      <div className="px-6 py-4 space-y-3">
        {artists.map((artist) => (
          <button
            key={artist.id}
            className="w-full rounded-2xl p-4 bg-card border border-border hover:bg-muted/30 transition-all text-left flex items-center gap-4"
            onClick={() => console.log(`Viewing ${artist.name}`)}
            data-testid={`button-artist-${artist.id}`}
          >
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-brand-coral/20 flex items-center justify-center font-semibold">
              {artist.avatar}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">{artist.name}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Add More Button */}
      <div className="px-6 py-4">
        <Button 
          className="w-full h-12 font-semibold bg-gradient-to-r from-primary to-brand-coral shadow-lg"
          data-testid="button-add-more"
        >
          Add More AudioTags
        </Button>
      </div>

      {/* Cancel at bottom */}
      <div className="fixed bottom-20 left-0 right-0 px-6 py-4 bg-background/95 backdrop-blur-xl border-t border-border">
        <Button 
          variant="ghost"
          className="w-full h-12 font-semibold"
          data-testid="button-cancel"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
