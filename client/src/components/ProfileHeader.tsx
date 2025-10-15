import { Share2, Instagram, Twitter, Globe, MapPin, Award } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProfileHeaderProps {
  name: string;
  bio?: string;
  location?: string;
  avatarUrl?: string;
  social?: {
    instagram?: string;
    twitter?: string;
    website?: string;
  };
  onShare?: () => void;
  isFeatured?: boolean;
}

export default function ProfileHeader({ 
  name, 
  bio, 
  location,
  avatarUrl, 
  social, 
  onShare,
  isFeatured 
}: ProfileHeaderProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-background to-background">
      {/* Dieter Rams: Aesthetic design with purpose */}
      <div className="flex flex-col items-center gap-8 p-8 pb-12">
        <div className="relative">
          {/* Luke Wroblewski: Large touch target, mobile-first */}
          <Avatar className={`h-32 w-32 transition-all duration-300 ${
            isFeatured 
              ? 'ring-4 ring-brand-yellow ring-offset-4 ring-offset-background shadow-xl' 
              : 'border-4 border-muted shadow-lg'
          }`}>
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="text-3xl bg-primary/10 text-primary font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
          {/* Susan Weinschenk: Social proof through visual indicators */}
          {isFeatured && (
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <Badge className="bg-brand-yellow text-white font-semibold px-4 py-1.5 shadow-lg flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5" />
                Featured Artist
              </Badge>
            </div>
          )}
        </div>
        
        {/* Steve Krug: Clear, scannable information hierarchy */}
        <div className="text-center space-y-4 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-3 duration-700" data-testid="text-profile-name">
            {name}
          </h1>
          {/* Don Norman: Clear signifiers for location */}
          {location && (
            <div className="flex items-center justify-center gap-2 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <MapPin className="h-4 w-4" />
              <span className="text-base font-medium">{location}</span>
            </div>
          )}
          {/* Julie Zhuo: Consistent typography system */}
          {bio && (
            <p className="text-lg leading-relaxed text-foreground/80 px-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150" data-testid="text-profile-bio">
              {bio}
            </p>
          )}
        </div>

        {/* Farai Madzima: Accessible social links with aria labels */}
        {social && (
          <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            {social?.instagram && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full hover-elevate" 
                data-testid="button-instagram"
                aria-label="Visit Instagram profile"
              >
                <Instagram className="h-5 w-5 text-brand-cyan" />
              </Button>
            )}
            {social?.twitter && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full hover-elevate" 
                data-testid="button-twitter"
                aria-label="Visit X (Twitter) profile"
              >
                <Twitter className="h-5 w-5 text-brand-cyan" />
              </Button>
            )}
            {social?.website && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full hover-elevate" 
                data-testid="button-website"
                aria-label="Visit personal website"
              >
                <Globe className="h-5 w-5 text-brand-cyan" />
              </Button>
            )}
          </div>
        )}

        {/* Aarron Walter: Emotional design with prominent CTA */}
        {onShare && (
          <Button 
            onClick={onShare} 
            size="lg"
            className="gap-2 px-10 h-12 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300" 
            data-testid="button-share"
            aria-label="Share this profile"
          >
            <Share2 className="h-5 w-5" />
            Share Profile
          </Button>
        )}
      </div>
    </div>
  );
}
