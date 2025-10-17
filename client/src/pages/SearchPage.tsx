import { useState } from "react";
import { Search, SlidersHorizontal, Play } from "lucide-react";
import { BlurCard } from "@/components/ios/BlurCard";
import { LargeTitle } from "@/components/ios/LargeTitle";
import { PageContainer } from "@/components/ios/PageContainer";
import { TrustBadge } from "@/components/TrustBadge";
import { FilterChip } from "@/components/FilterChip";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState("relevance");

  const artists = [
    { id: "1", name: "Robin Cousins", specialty: "Commercial & Gaming", avatar: "RC", demos: 12, rating: 4.9, verified: true, online: true, responseTime: "2h", price: "$150-300" },
    { id: "2", name: "Sarah Mitchell", specialty: "Animation", avatar: "SM", demos: 8, rating: 4.8, verified: false, online: false, responseTime: "4h", price: "$100-200" },
    { id: "3", name: "James Anderson", specialty: "Documentary", avatar: "JA", demos: 15, rating: 5.0, verified: true, online: true, responseTime: "1h", price: "$200-400" },
    { id: "4", name: "Emily Chen", specialty: "Multi-lingual", avatar: "EC", demos: 10, rating: 4.7, verified: false, online: true, responseTime: "3h", price: "$120-250" },
    { id: "5", name: "Michael Brown", specialty: "Video Games", avatar: "MB", demos: 9, rating: 4.9, verified: true, online: false, responseTime: "2h", price: "$180-350" },
    { id: "6", name: "Lisa Taylor", specialty: "Advertising", avatar: "LT", demos: 7, rating: 4.6, verified: false, online: true, responseTime: "5h", price: "$90-180" },
  ];

  const filters = [
    { id: "verified", label: "Verified", count: 3 },
    { id: "online", label: "Online Now", count: 4 },
    { id: "top-rated", label: "Top Rated", count: 2 },
    { id: "fast-response", label: "Fast Response", count: 3 },
  ];

  const toggleFilter = (filterId: string) => {
    const newFilters = new Set(activeFilters);
    if (newFilters.has(filterId)) {
      newFilters.delete(filterId);
    } else {
      newFilters.add(filterId);
    }
    setActiveFilters(newFilters);
  };

  return (
    <PageContainer>
      <div className="min-h-screen bg-background pb-20">
        <LargeTitle title="Search" />

        <div className="px-6 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
            <input
              placeholder="Artists, styles, accents..."
              className="ios-input w-full pl-12 pr-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <SlidersHorizontal className="h-4 w-4 text-primary" />
            </button>
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
            {filters.map((filter) => (
              <FilterChip
                key={filter.id}
                label={filter.label}
                count={filter.count}
                active={activeFilters.has(filter.id)}
                onToggle={() => toggleFilter(filter.id)}
                onRemove={() => toggleFilter(filter.id)}
              />
            ))}
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between px-2">
            <p className="subheadline text-muted-foreground">
              {artists.length} artists found
            </p>
            <select 
              className="caption-1 bg-transparent text-muted-foreground"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevance">Relevance</option>
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Artist Cards */}
          <div className="space-y-3">
            {artists.map((artist) => (
              <BlurCard
                key={artist.id}
                size="compact"
                onClick={() => console.log(`Viewing ${artist.name}`)}
                className="relative overflow-hidden"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-16 w-16 rounded-full flex items-center justify-center headline flex-shrink-0 relative ${
                    artist.verified 
                      ? 'bg-primary/20 text-primary ring-2 ring-primary/30' 
                      : 'bg-primary/10 dark:bg-primary/20 text-primary'
                  }`}>
                    {artist.avatar}
                    {artist.online && (
                      <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-[hsl(var(--brand-green))] rounded-full border-2 border-background" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="headline truncate">{artist.name}</h3>
                      {artist.verified && (
                        <TrustBadge type="verified" size="sm" tooltip="Identity verified" />
                      )}
                    </div>
                    <p className="subheadline text-muted-foreground truncate">{artist.specialty}</p>
                    <div className="flex items-center gap-3 caption-1 text-muted-foreground mt-1">
                      <span>{artist.demos} demos</span>
                      <span>·</span>
                      <span>⭐ {artist.rating}</span>
                      <span>·</span>
                      <span className="text-[hsl(var(--brand-cyan))]">{artist.price}</span>
                    </div>
                  </div>

                  <button className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary hover:text-primary-foreground transition-all active:scale-95">
                    <Play className="h-5 w-5 ml-0.5" />
                  </button>
                </div>
              </BlurCard>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
