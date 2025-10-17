import { useState } from "react";
import { Search, Star } from "lucide-react";
import { BlurCard } from "@/components/ios/BlurCard";
import { IOSInput } from "@/components/ios/IOSInput";
import { LargeTitle } from "@/components/ios/LargeTitle";
import { IOSButton } from "@/components/ios/IOSButton";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const artists = [
    { id: "1", name: "Robin Cousins", specialty: "Commercial & Gaming", avatar: "RC", demos: 12, rating: 4.9, featured: true },
    { id: "2", name: "Sarah Mitchell", specialty: "Animation", avatar: "SM", demos: 8, rating: 4.8, featured: false },
    { id: "3", name: "James Anderson", specialty: "Documentary", avatar: "JA", demos: 15, rating: 5.0, featured: true },
    { id: "4", name: "Emily Chen", specialty: "Multi-lingual", avatar: "EC", demos: 10, rating: 4.7, featured: false },
    { id: "5", name: "Michael Brown", specialty: "Video Games", avatar: "MB", demos: 9, rating: 4.9, featured: false },
    { id: "6", name: "Lisa Taylor", specialty: "Advertising", avatar: "LT", demos: 7, rating: 4.6, featured: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <LargeTitle title="Search" />

      <div className="px-6 space-y-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
          <input
            placeholder="Artists, styles, accents..."
            className="ios-input w-full pl-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            data-testid="input-search"
          />
        </div>

        <div>
          <p className="subheadline text-muted-foreground mb-4 px-2">
            {artists.length} artists
          </p>

          <div className="space-y-3">
            {artists.map((artist) => (
              <BlurCard
                key={artist.id}
                onClick={() => console.log(`Viewing ${artist.name}`)}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-16 w-16 rounded-full flex items-center justify-center headline flex-shrink-0 ${
                    artist.featured 
                      ? 'bg-primary/20 text-primary ring-2 ring-primary/30' 
                      : 'bg-primary/10 dark:bg-primary/20 text-primary'
                  }`}>
                    {artist.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="headline truncate">{artist.name}</h3>
                      {artist.featured && (
                        <Star className="h-4 w-4 text-primary fill-primary flex-shrink-0" />
                      )}
                    </div>
                    <p className="subheadline text-muted-foreground truncate">{artist.specialty}</p>
                    <div className="flex items-center gap-3 caption-1 text-muted-foreground mt-1">
                      <span>{artist.demos} demos</span>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-primary fill-primary" />
                        <span>{artist.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
