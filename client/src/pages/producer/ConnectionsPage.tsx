import { Input } from "@/components/ui/input";
import { Search, UserPlus, Play } from "lucide-react";

export default function ConnectionsPage() {
  const artists = [
    { id: "1", name: "Robin Cousins", bio: "Commercial & gaming", avatar: "RC", demos: 12 },
    { id: "2", name: "Sarah Mitchell", bio: "Animation voices", avatar: "SM", demos: 8 },
    { id: "3", name: "James Anderson", bio: "Documentary", avatar: "JA", demos: 15 },
    { id: "4", name: "Emily Chen", bio: "Multi-lingual", avatar: "EC", demos: 10 },
    { id: "5", name: "Michael Brown", bio: "Video game characters", avatar: "MB", demos: 9 },
    { id: "6", name: "Lisa Taylor", bio: "Advertising", avatar: "LT", demos: 7 },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10 px-5 py-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-brand-cyan/20 flex items-center justify-center">
            <UserPlus className="h-5 w-5 text-brand-cyan" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Connections</h1>
            <p className="text-xs text-muted-foreground">{artists.length} voice artists</p>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search artists..."
            className="pl-10 h-11 rounded-full bg-muted/50"
            data-testid="input-search-connections"
          />
        </div>
      </div>

      {/* Artists Grid */}
      <div className="px-5 py-4 grid grid-cols-2 gap-3">
        {artists.map((artist) => (
          <button
            key={artist.id}
            className="rounded-2xl p-4 bg-card border border-border hover:bg-muted/30 transition-all text-left"
            onClick={() => console.log(`Viewing ${artist.name}`)}
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-brand-cyan/20 to-primary/20 flex items-center justify-center font-semibold">
                {artist.avatar}
              </div>
              <div className="w-full">
                <div className="font-semibold text-sm mb-1 truncate">{artist.name}</div>
                <div className="text-xs text-muted-foreground mb-2 truncate">{artist.bio}</div>
                <div className="flex items-center justify-center gap-1 text-xs text-primary">
                  <Play className="h-3 w-3" />
                  {artist.demos} demos
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
