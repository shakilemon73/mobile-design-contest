import { Mic, Briefcase, ChevronRight } from "lucide-react";
import logoVertical from "@assets/logo_vertical_1760520832507.png";
import { BlurCard } from "@/components/ios/BlurCard";

interface RoleSelectorProps {
  onSelectRole: (role: "artist" | "producer") => void;
}

export default function RoleSelector({ onSelectRole }: RoleSelectorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background dark:bg-background">
      <div className="w-full max-w-md space-y-16 animate-in fade-in duration-700">
        <div className="text-center space-y-8">
          <img 
            src={logoVertical} 
            alt="AudioTag" 
            className="h-24 mx-auto opacity-90" 
          />
          <div className="space-y-4">
            <h1 className="large-title">Welcome to AudioTag</h1>
            <p className="body text-muted-foreground max-w-xs mx-auto">
              Choose how you'd like to get started with our voice talent platform
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <BlurCard
            onClick={() => onSelectRole("artist")}
            className="cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <div 
              className="flex items-center gap-4" 
              data-testid="button-role-artist"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mic className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="title-3 mb-1">Voice Artist</h2>
                <p className="subheadline text-muted-foreground">
                  Showcase your demos and connect with producers
                </p>
              </div>

              <ChevronRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
            </div>
          </BlurCard>

          <BlurCard
            onClick={() => onSelectRole("producer")}
            className="cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <div 
              className="flex items-center gap-4" 
              data-testid="button-role-producer"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="title-3 mb-1">Producer</h2>
                <p className="subheadline text-muted-foreground">
                  Discover talent and manage your connections
                </p>
              </div>

              <ChevronRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
            </div>
          </BlurCard>
        </div>

        <p className="text-center caption-1 text-muted-foreground px-4">
          By continuing, you agree to AudioTag's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
