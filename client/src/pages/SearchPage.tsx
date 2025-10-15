import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Sliders, Play, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["Commercial", "Gaming", "Animation", "Documentary", "E-Learning", "Audiobook"];
  
  const artists = [
    { id: "1", name: "Robin Cousins", specialty: "Commercial & Gaming", avatar: "RC", demos: 12, rating: 4.9, featured: true },
    { id: "2", name: "Sarah Mitchell", specialty: "Animation", avatar: "SM", demos: 8, rating: 4.8, featured: false },
    { id: "3", name: "James Anderson", specialty: "Documentary", avatar: "JA", demos: 15, rating: 5.0, featured: true },
    { id: "4", name: "Emily Chen", specialty: "Multi-lingual", avatar: "EC", demos: 10, rating: 4.7, featured: false },
    { id: "5", name: "Michael Brown", specialty: "Video Games", avatar: "MB", demos: 9, rating: 4.9, featured: false },
    { id: "6", name: "Lisa Taylor", specialty: "Advertising", avatar: "LT", demos: 7, rating: 4.6, featured: false },
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Search Header - Luke: Prominent search */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10">
        <div className="px-6 py-5 space-y-4">
          {/* Page Title */}
          <div>
            <h1 className="text-2xl font-bold mb-1">Find Voice Talent</h1>
            <p className="text-sm text-muted-foreground">Discover the perfect voice for your project</p>
          </div>

          {/* Search Input - Don Norman: Clear affordance */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by name, style, or accent..."
              className="pl-12 pr-12 h-12 text-base rounded-full bg-muted/50 border-0 focus-visible:ring-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search"
            />
            {searchQuery && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-muted-foreground/10 flex items-center justify-center"
                onClick={() => setSearchQuery("")}
              >
                <span className="text-xs">✕</span>
              </button>
            )}
          </div>

          {/* Filter Toggle - Gaurav: Clean controls */}
          <div className="flex items-center gap-2">
            <Button
              variant={showFilters ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="h-9 px-4 rounded-full gap-2"
            >
              <Sliders className="h-4 w-4" />
              <span className="text-sm font-medium">Filters</span>
              {selectedFilters.length > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">
                  {selectedFilters.length}
                </Badge>
              )}
            </Button>

            {selectedFilters.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedFilters([])}
                className="h-9 px-3 text-sm"
              >
                Clear all
              </Button>
            )}
          </div>

          {/* Filter Pills - Pablo: Clear visual feedback */}
          {showFilters && (
            <div className="flex gap-2 flex-wrap animate-in slide-in-from-top-2 duration-200">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedFilters.includes(category) ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm font-medium rounded-full transition-all hover:scale-105"
                  onClick={() => toggleFilter(category)}
                  data-testid={`filter-${category}`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results - Whitespace and clarity */}
      <div className="px-6 py-6">
        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-5">
          <span className="font-semibold text-foreground">{artists.length} artists</span> match your search
          {selectedFilters.length > 0 && ` in ${selectedFilters.join(', ')}`}
        </p>

        {/* Artist Grid - Scannable cards */}
        <div className="space-y-4">
          {artists.map((artist) => (
            <button
              key={artist.id}
              className="w-full text-left rounded-2xl p-5 bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              onClick={() => console.log(`Viewing ${artist.name}`)}
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className={`h-16 w-16 rounded-full flex items-center justify-center font-semibold text-lg ${
                    artist.featured 
                      ? 'bg-gradient-to-br from-brand-yellow/20 to-brand-coral/20 ring-2 ring-brand-yellow/50' 
                      : 'bg-gradient-to-br from-primary/10 to-brand-cyan/10'
                  }`}>
                    {artist.avatar}
                  </div>
                  {artist.featured && (
                    <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-brand-yellow flex items-center justify-center">
                      <Star className="h-3 w-3 text-white fill-white" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-base mb-1">{artist.name}</h3>
                      <p className="text-sm text-muted-foreground">{artist.specialty}</p>
                    </div>
                    {artist.featured && (
                      <Badge variant="secondary" className="bg-brand-yellow/10 text-brand-yellow border-0 text-xs px-2">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Play className="h-3.5 w-3.5 text-primary" />
                      <span className="text-muted-foreground">{artist.demos} demos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 text-brand-yellow fill-brand-yellow" />
                      <span className="font-medium">{artist.rating}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <div className="h-9 px-4 rounded-full bg-gradient-to-r from-primary to-brand-coral text-primary-foreground font-medium text-sm flex items-center justify-center">
                    View
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
