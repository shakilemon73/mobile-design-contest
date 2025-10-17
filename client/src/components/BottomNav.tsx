import { User, Users, BarChart3, Settings, Tag, Search } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userType: "artist" | "producer";
}

export default function BottomNav({ activeTab, onTabChange, userType }: BottomNavProps) {
  const tabs = [
    { id: "me", icon: User, label: "Me" },
    { id: "them", icon: Users, label: "Them" },
    { id: "stats", icon: BarChart3, label: "Stats" },
    { id: "edit", icon: Settings, label: "Edit" },
    { id: "label", icon: Tag, label: "Label" },
    { id: "search", icon: Search, label: "Search" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 blur-nav z-50 safe-area-inset-bottom">
      <div className="w-full max-w-[430px] mx-auto px-2 pt-2 pb-3 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              data-testid={`button-nav-${tab.id}`}
              className="flex flex-col items-center gap-1.5 min-w-[56px] py-1 transition-all active:scale-95"
              aria-label={tab.label}
              aria-current={isActive ? "page" : undefined}
            >
              <div className="relative">
                <Icon className={`h-6 w-6 transition-all ${
                  isActive ? 'text-primary scale-110' : 'text-muted-foreground'
                }`} />
              </div>

              <span className={`caption-2 transition-colors ${
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
