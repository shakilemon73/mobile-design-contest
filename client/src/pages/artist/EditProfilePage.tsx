import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";

export default function EditProfilePage() {
  const [profile, setProfile] = useState({
    name: "User Name",
    bio: "Proin non vestibulum erat, eu varius leo. Suspendisse sit amet ullamcorper libero.",
    phone: "+44 7700 900000",
    email: "user@example.com",
    instagram: "@username",
    twitter: "@username",
    website: "https://example.com",
  });

  const handleSave = () => {
    console.log("Saving profile:", profile);
  };

  return (
    <div className="pb-20">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold">Edit Profile</h1>
      </div>

      <div className="p-4 space-y-6">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute bottom-0 right-0 rounded-full h-8 w-8"
              data-testid="button-upload-photo"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              data-testid="input-name"
            />
          </div>

          <div>
            <Label htmlFor="bio">Biography (Max 250 characters)</Label>
            <Textarea
              id="bio"
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              maxLength={250}
              rows={4}
              data-testid="input-bio"
            />
            <p className="text-xs text-muted-foreground mt-1">
              {profile.bio.length}/250 characters
            </p>
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              data-testid="input-phone"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              data-testid="input-email"
            />
          </div>

          <div>
            <Label htmlFor="instagram">Instagram</Label>
            <Input
              id="instagram"
              value={profile.instagram}
              onChange={(e) => setProfile({ ...profile, instagram: e.target.value })}
              data-testid="input-instagram"
            />
          </div>

          <div>
            <Label htmlFor="twitter">X (Twitter)</Label>
            <Input
              id="twitter"
              value={profile.twitter}
              onChange={(e) => setProfile({ ...profile, twitter: e.target.value })}
              data-testid="input-twitter"
            />
          </div>

          <div>
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="url"
              value={profile.website}
              onChange={(e) => setProfile({ ...profile, website: e.target.value })}
              data-testid="input-website"
            />
          </div>

          <Button onClick={handleSave} className="w-full" data-testid="button-save-profile">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
