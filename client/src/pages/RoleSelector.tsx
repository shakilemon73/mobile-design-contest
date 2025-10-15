import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Briefcase } from "lucide-react";
import logoVertical from "@assets/logo_vertical_1760520832507.png";

interface RoleSelectorProps {
  onSelectRole: (role: "artist" | "producer") => void;
}

export default function RoleSelector({ onSelectRole }: RoleSelectorProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <img src={logoVertical} alt="AudioTag" className="h-32 mx-auto" />
          <p className="text-lg text-muted-foreground">Choose your profile type</p>
        </div>

        <div className="grid gap-4">
          <Card
            className="p-8 hover-elevate cursor-pointer border-2 hover:border-primary transition-colors"
            onClick={() => onSelectRole("artist")}
            data-testid="button-role-artist"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mic className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Voice Artist</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Showcase your demos and connect with producers
                </p>
              </div>
            </div>
          </Card>

          <Card
            className="p-8 hover-elevate cursor-pointer border-2 hover:border-brand-cyan transition-colors"
            onClick={() => onSelectRole("producer")}
            data-testid="button-role-producer"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="h-16 w-16 rounded-full bg-brand-cyan/10 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-brand-cyan" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Producer</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Discover talent and manage your connections
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
