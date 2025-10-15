import { MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MapPage() {
  const handleClose = () => {
    window.history.back(); // Go back to previous page
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Map Placeholder */}
      <div className="h-screen w-full bg-gradient-to-br from-muted via-background to-muted flex items-center justify-center">
        <div className="text-center space-y-4">
          <MapPin className="h-16 w-16 mx-auto text-primary" />
          <p className="text-lg font-semibold">Fullscreen Map</p>
          <p className="text-sm text-muted-foreground">Map view coming soon</p>
        </div>
      </div>

      {/* Exit Fullscreen Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          size="icon"
          onClick={handleClose}
          className="h-12 w-12 rounded-full bg-background/95 backdrop-blur-xl border border-border shadow-lg"
          data-testid="button-exit-fullscreen"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Location Info Card */}
      <div className="fixed bottom-6 left-6 right-6 z-40">
        <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-brand-coral/20 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-muted-foreground">View artists & producers near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
