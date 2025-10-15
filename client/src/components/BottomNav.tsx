import { User, Users, BarChart3, Edit, Tag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userType: "artist" | "producer";
}

export default function BottomNav({ activeTab, onTabChange, userType }: BottomNavProps) {
  const tabs = [
    { id: "me", label: "Me", icon: User },
    { id: "them", label: "Them", icon: Users },
    { id: "stats", label: "Stats", icon: BarChart3 },
    { id: "edit", label: "Edit", icon: Edit },
    { id: "label", label: "Label", icon: Tag },
    { id: "search", label: "Search", icon: Search },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-card-border z-50">
      <div className="flex items-center justify-around h-16 max-w-screen-xl mx-auto px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              data-testid={`button-nav-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 h-14 px-3 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
              <span className="text-xs font-medium">{tab.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
