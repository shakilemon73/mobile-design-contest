import { Mic, Briefcase, ArrowRight } from "lucide-react";
import logoVertical from "@assets/logo_vertical_1760520832507.png";

interface RoleSelectorProps {
  onSelectRole: (role: "artist" | "producer") => void;
}

export default function RoleSelector({ onSelectRole }: RoleSelectorProps) {
  return (
    // Pablo Stanley: Clear, friendly onboarding
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="w-full max-w-md space-y-12 animate-in fade-in duration-700">
        {/* Header - Clear value prop */}
        <div className="text-center space-y-6">
          <img src={logoVertical} alt="AudioTag" className="h-32 mx-auto" />
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight">Welcome to AudioTag</h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Choose how you'd like to get started with our voice talent platform
            </p>
          </div>
        </div>

        {/* Role Cards - Conversion focused */}
        <div className="space-y-4">
          {/* Artist Option */}
          <button
            onClick={() => onSelectRole("artist")}
            data-testid="button-role-artist"
            className="group w-full text-left rounded-2xl p-6 bg-card border-2 border-border hover:border-primary hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-5">
              {/* Icon - Peter Tarka: Bold visuals */}
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-brand-coral flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mic className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">Voice Artist</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Showcase your demos and connect with producers
                </p>
              </div>

              {/* Arrow - Visual feedback */}
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </button>

          {/* Producer Option */}
          <button
            onClick={() => onSelectRole("producer")}
            data-testid="button-role-producer"
            className="group w-full text-left rounded-2xl p-6 bg-card border-2 border-border hover:border-brand-cyan hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-5">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-brand-cyan to-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Briefcase className="h-7 w-7 text-white" />
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">Producer</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Discover talent and manage your connections
                </p>
              </div>

              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        </div>

        {/* Footer - Trust signals */}
        <p className="text-center text-xs text-muted-foreground leading-relaxed">
          By continuing, you agree to AudioTag's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
