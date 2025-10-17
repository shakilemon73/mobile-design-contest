import { MapPin, X, Filter, Layers } from "lucide-react";
import { useState } from "react";
import { BlurCard } from "@/components/ios/BlurCard";
import { TrustBadge } from "@/components/TrustBadge";
import { FilterChip } from "@/components/FilterChip";

export default function MapPage() {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [selectedArtist, setSelectedArtist] = useState<string | null>("1");

  const handleClose = () => {
    window.history.back();
  };

  const filters = [
    { id: "verified", label: "Verified" },
    { id: "online", label: "Online Now" },
    { id: "nearby", label: "Nearby" },
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

  const nearbyArtists = [
    { id: "1", name: "Robin Cousins", location: "London, UK", distance: "2.3 km", avatar: "RC", verified: true, online: true, specialty: "Commercial & Gaming" },
    { id: "2", name: "Sarah Mitchell", location: "London, UK", distance: "4.1 km", avatar: "SM", verified: false, online: true, specialty: "Animation" },
    { id: "3", name: "James Anderson", location: "London, UK", distance: "5.8 km", avatar: "JA", verified: true, online: false, specialty: "Documentary" },
  ];

  const selectedArtistData = nearbyArtists.find(a => a.id === selectedArtist);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Map Background - Placeholder */}
      <div className="h-screen w-full bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
        {/* Map Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Animated Location Markers */}
        <div className="absolute top-1/4 left-1/3 animate-pulse">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="absolute top-1/2 right-1/4 animate-pulse delay-150">
          <div className="h-10 w-10 rounded-full bg-[hsl(var(--brand-cyan))]/20 flex items-center justify-center">
            <MapPin className="h-5 w-5 text-[hsl(var(--brand-cyan))]" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/2 animate-pulse delay-300">
          <div className="h-10 w-10 rounded-full bg-[hsl(var(--brand-green))]/20 flex items-center justify-center">
            <MapPin className="h-5 w-5 text-[hsl(var(--brand-green))]" />
          </div>
        </div>

        {/* Map Center Indicator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-3 w-3 rounded-full bg-primary border-4 border-background shadow-lg" />
        </div>
      </div>

      {/* Exit Button */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={handleClose}
          className="h-12 w-12 rounded-full blur-nav border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
          data-testid="button-exit-fullscreen"
          aria-label="Close map"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Map Controls */}
      <div className="fixed top-6 left-6 z-50 space-y-3">
        <button 
          className="h-12 w-12 rounded-full blur-nav border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
          aria-label="Layers"
        >
          <Layers className="h-5 w-5" />
        </button>
      </div>

      {/* Filter Bar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <BlurCard size="compact" className="px-4 py-2">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {filters.map((filter) => (
              <FilterChip
                key={filter.id}
                label={filter.label}
                active={activeFilters.has(filter.id)}
                onToggle={() => toggleFilter(filter.id)}
                onRemove={() => toggleFilter(filter.id)}
              />
            ))}
          </div>
        </BlurCard>
      </div>

      {/* Nearby Artists Carousel */}
      <div className="fixed bottom-6 left-0 right-0 z-40 px-6">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
          {nearbyArtists.map((artist) => (
            <BlurCard
              key={artist.id}
              size="compact"
              className="min-w-[280px] snap-center cursor-pointer"
              onClick={() => setSelectedArtist(artist.id)}
            >
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center headline text-primary flex-shrink-0 relative">
                  {artist.avatar}
                  {artist.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 bg-[hsl(var(--brand-green))] rounded-full border-2 border-background" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className="headline truncate">{artist.name}</div>
                    {artist.verified && <TrustBadge type="verified" size="sm" />}
                  </div>
                  <div className="caption-1 text-muted-foreground truncate">{artist.specialty}</div>
                  <div className="flex items-center gap-1 caption-1 text-muted-foreground mt-0.5">
                    <MapPin className="h-3 w-3" />
                    <span>{artist.distance} away</span>
                  </div>
                </div>
              </div>
            </BlurCard>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="fixed bottom-32 right-6 z-40">
        <BlurCard size="compact" className="space-y-2">
          <div className="caption-1 font-semibold mb-2">Legend</div>
          <div className="flex items-center gap-2 caption-1">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span>Verified Artists</span>
          </div>
          <div className="flex items-center gap-2 caption-1">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--brand-cyan))]" />
            <span>Producers</span>
          </div>
          <div className="flex items-center gap-2 caption-1">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--brand-green))]" />
            <span>Online Now</span>
          </div>
        </BlurCard>
      </div>
    </div>
  );
}
