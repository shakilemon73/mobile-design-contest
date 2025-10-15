import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Save, Instagram, Twitter, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function EditProfilePage() {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  
  const [profile, setProfile] = useState({
    name: "Robin Cousins",
    bio: "Professional voice artist specializing in commercial, gaming, and documentary work. 10+ years bringing stories to life.",
    location: "London, UK",
    phone: "+44 7700 900000",
    email: "robin.cousins@example.com",
    instagram: "robincousins",
    twitter: "robinvoice",
    website: "robincousins.com",
  });

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Profile updated successfully",
        description: "Your changes are now live.",
        duration: 3000,
      });
    }, 1000);
  };

  const charCount = profile.bio.length;
  const charLimit = 250;
  const isNearLimit = charCount > charLimit * 0.8;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10 px-6 py-5">
        <h1 className="text-2xl font-bold mb-1">Edit Profile</h1>
        <p className="text-sm text-muted-foreground">Update your public information</p>
      </div>

      <div className="px-6 py-6 space-y-8">
        {/* Avatar Section - Luke: Clear visual priority */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary via-brand-coral to-brand-yellow p-[2px]">
              <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-br from-primary to-brand-coral bg-clip-text text-transparent">
                  RC
                </span>
              </div>
            </div>
            <button
              className="absolute bottom-0 right-0 h-9 w-9 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              data-testid="button-upload-photo"
              aria-label="Upload photo"
            >
              <Camera className="h-4 w-4 text-primary-foreground" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground text-center max-w-xs">
            Upload a professional headshot to make a great first impression
          </p>
        </div>

        {/* Basic Information - Don Norman: Clear labels */}
        <div className="space-y-5">
          <h3 className="text-base font-bold">Basic Information</h3>
          
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
            <Input
              id="name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="h-11"
              data-testid="input-name"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium">Location</Label>
            <Input
              id="location"
              value={profile.location}
              onChange={(e) => setProfile({ ...profile, location: e.target.value })}
              className="h-11"
              data-testid="input-location"
              placeholder="City, Country"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="bio" className="text-sm font-medium">Biography</Label>
              <span className={`text-xs font-medium transition-colors ${
                isNearLimit ? 'text-brand-coral' : 'text-muted-foreground'
              }`}>
                {charCount}/{charLimit}
              </span>
            </div>
            <Textarea
              id="bio"
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              maxLength={charLimit}
              rows={4}
              className="resize-none text-[15px] leading-relaxed"
              data-testid="input-bio"
              placeholder="Tell producers about your experience and specialties..."
            />
            <p className="text-xs text-muted-foreground">
              Write a compelling bio that highlights what makes you unique
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-5">
          <h3 className="text-base font-bold">Contact Information</h3>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="h-11"
              data-testid="input-email"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className="h-11"
              data-testid="input-phone"
              placeholder="+44 7700 900000"
            />
          </div>
        </div>

        {/* Social Media - Peter Tarka: Branded icons */}
        <div className="space-y-5">
          <h3 className="text-base font-bold">Social Media</h3>
          
          <div className="space-y-2">
            <Label htmlFor="instagram" className="text-sm font-medium flex items-center gap-2">
              <Instagram className="h-4 w-4 text-muted-foreground" />
              Instagram
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
              <Input
                id="instagram"
                value={profile.instagram}
                onChange={(e) => setProfile({ ...profile, instagram: e.target.value })}
                className="h-11 pl-7"
                data-testid="input-instagram"
                placeholder="username"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="twitter" className="text-sm font-medium flex items-center gap-2">
              <Twitter className="h-4 w-4 text-muted-foreground" />
              X (Twitter)
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
              <Input
                id="twitter"
                value={profile.twitter}
                onChange={(e) => setProfile({ ...profile, twitter: e.target.value })}
                className="h-11 pl-7"
                data-testid="input-twitter"
                placeholder="username"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="text-sm font-medium flex items-center gap-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              Website
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">https://</span>
              <Input
                id="website"
                value={profile.website}
                onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                className="h-11 pl-[72px]"
                data-testid="input-website"
                placeholder="yourwebsite.com"
              />
            </div>
          </div>
        </div>

        {/* Save Button - Conversion focused */}
        <Button 
          onClick={handleSave} 
          disabled={isSaving}
          className="w-full h-12 font-semibold bg-gradient-to-r from-primary to-brand-coral shadow-lg gap-2 sticky bottom-20" 
          data-testid="button-save-profile"
        >
          {isSaving ? (
            <>
              <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
              Saving Changes...
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
