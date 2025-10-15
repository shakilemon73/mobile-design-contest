import { useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = ["Gaming", "Advertising", "Animation", "Documentary", "Commercial"];
  
  const artists = [
    { id: "1", name: "Robin Cousins", bio: "Professional voiceover artist" },
    { id: "2", name: "Sarah Mitchell", bio: "Animation and gaming specialist" },
    { id: "3", name: "James Anderson", bio: "Commercial voice talent" },
    { id: "4", name: "Emily Chen", bio: "Documentary narrator" },
    { id: "5", name: "Michael Brown", bio: "Video game character voices" },
    { id: "6", name: "Lisa Taylor", bio: "Advertising voiceover" },
  ];

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-background z-10 p-4 border-b space-y-4">
        <h1 className="text-2xl font-bold">Search Artists</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, genre, location..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            data-testid="input-search"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant={selectedFilters.includes(filter) ? "default" : "secondary"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => toggleFilter(filter)}
              data-testid={`filter-${filter}`}
            >
              {filter}
            </Badge>
          ))}
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
