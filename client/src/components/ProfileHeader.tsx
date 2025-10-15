import { Share2, Instagram, Twitter, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import logoMark from "@assets/logo_mark_1760520832506.png";

interface ProfileHeaderProps {
  name: string;
  bio?: string;
  avatarUrl?: string;
  social?: {
    instagram?: string;
    twitter?: string;
    website?: string;
  };
  onShare?: () => void;
}

export default function ProfileHeader({ name, bio, avatarUrl, social, onShare }: ProfileHeaderProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="relative">
        <Avatar className="h-32 w-32 border-4 border-primary">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold" data-testid="text-profile-name">
          {name}
        </h1>
        {bio && (
          <p className="text-sm text-muted-foreground max-w-md" data-testid="text-profile-bio">
            {bio}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        {social?.instagram && (
          <Button variant="ghost" size="icon" data-testid="button-instagram">
            <Instagram className="h-5 w-5 text-brand-cyan" />
          </Button>
        )}
        {social?.twitter && (
          <Button variant="ghost" size="icon" data-testid="button-twitter">
            <Twitter className="h-5 w-5 text-brand-cyan" />
          </Button>
        )}
        {social?.website && (
          <Button variant="ghost" size="icon" data-testid="button-website">
            <Globe className="h-5 w-5 text-brand-cyan" />
          </Button>
        )}
      </div>

      {onShare && (
        <Button onClick={onShare} variant="outline" className="gap-2" data-testid="button-share">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      )}
    </div>
  );
}
