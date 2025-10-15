import ArtistCard from "@/components/ArtistCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function ConnectionsPage() {
  const artists = [
    { id: "1", name: "Artist 1", bio: "Professional voice actor" },
    { id: "2", name: "Artist 2", bio: "Animation specialist" },
    { id: "3", name: "Artist 3", bio: "Commercial voiceover" },
    { id: "4", name: "Artist 4", bio: "Gaming voice talent" },
  ];

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-background z-10 p-4 border-b">
        <h1 className="text-2xl font-bold mb-4">My Connections</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search artists..."
            className="pl-10"
            data-testid="input-search-connections"
          />
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-3">
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            name={artist.name}
            bio={artist.bio}
            onPlay={() => console.log(`Playing ${artist.name} demo`)}
            onClick={() => console.log(`Viewing ${artist.name} profile`)}
          />
        ))}
      </div>
    </div>
  );
}
