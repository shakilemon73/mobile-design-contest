import { Home, Search, BarChart3, Users, Settings } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userType: "artist" | "producer";
}

export default function BottomNav({ activeTab, onTabChange, userType }: BottomNavProps) {
  const tabs = [
    { id: "me", icon: Home, label: "Home" },
    { id: "search", icon: Search, label: "Search" },
    { id: "stats", icon: BarChart3, label: "Stats" },
    { id: "them", icon: Users, label: "Network" },
    { id: "edit", icon: Settings, label: "Settings" },
  ];

  return (
    // Don Norman: Clear mapping, Luke: Mobile optimized
    <nav className="fixed bottom-0 left-0 right-0 bg-background/98 backdrop-blur-xl border-t border-border z-50 safe-area-inset-bottom">
      <div className="w-full max-w-[430px] mx-auto px-4 pt-2 pb-3 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              data-testid={`button-nav-${tab.id}`}
              className="flex flex-col items-center gap-1 min-w-[60px] py-2 transition-all"
              aria-label={tab.label}
              aria-current={isActive ? "page" : undefined}
            >
              {/* Icon Container - Pablo: Clear visual feedback */}
              <div className={`relative transition-all ${
                isActive ? 'scale-110' : 'scale-100'
              }`}>
                <Icon className={`h-6 w-6 transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`} />
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </div>

              {/* Label - Typography for readability */}
              <span className={`text-[11px] font-medium transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
