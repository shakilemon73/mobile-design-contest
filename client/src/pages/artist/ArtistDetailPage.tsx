import { Button } from "@/components/ui/button";
import { Share, Instagram, Twitter, Globe, MapPin } from "lucide-react";

export default function ArtistDetailPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10 px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary via-brand-coral to-brand-yellow p-[2px]">
            <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
              <span className="text-xl font-bold bg-gradient-to-br from-primary to-brand-coral bg-clip-text text-transparent">
                UN
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">User Name</h1>
            <p className="text-sm text-muted-foreground">Voice Artist</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a 
            href="#" 
            className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
            data-testid="link-instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
            data-testid="link-twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
            data-testid="link-website"
          >
            <Globe className="h-5 w-5" />
          </a>
        </div>

        {/* Bio */}
        <div className="space-y-3">
          <p className="text-[15px] leading-relaxed text-foreground">
            Proin non vestibulum erat, eu varius leo. Suspendisse sit amet ullamcorper 
            libero. Phasellus nunc lectus, venenatis gravida faucibus vel, lacinia in lorem. 
            Nunc magna arcu, ornare sit amet pulvinar eget, lobortis eu enim. Cras id 
            elit ultricies risus consectetur semper et nec erat. Quisque vel nisl in est 
            vehicula tincidunt sed sit amet arcu. Vivamus aliquet quam a iaculis 
            volutpat. Suspendisse auctor consequat velit venenatis blandit. Cras 
            condimentum justo quis dictum vestibulum. Cras sed ipsum in neque 
            semper tempor.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button 
            className="w-full h-12 font-semibold bg-gradient-to-r from-primary to-brand-coral shadow-lg gap-2"
            data-testid="button-share"
          >
            <Share className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}
