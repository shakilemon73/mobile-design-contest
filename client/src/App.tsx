import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNav from "@/components/BottomNav";
import AudioPlayer from "@/components/AudioPlayer";
import RoleSelector from "@/pages/RoleSelector";

import ProfilePage from "@/pages/artist/ProfilePage";
import FollowersPage from "@/pages/artist/FollowersPage";
import StatsPage from "@/pages/artist/StatsPage";
import ShopPage from "@/pages/artist/ShopPage";
import ListsPage from "@/pages/artist/ListsPage";
import EditProfilePage from "@/pages/artist/EditProfilePage";
import EditDemosPage from "@/pages/artist/EditDemosPage";

import ConnectionsPage from "@/pages/producer/ConnectionsPage";
import NotificationsPage from "@/pages/producer/NotificationsPage";
import GroupsPage from "@/pages/producer/GroupsPage";
import SearchPage from "@/pages/SearchPage";

function AppContent({ userRole }: { userRole: "artist" | "producer" }) {
  const [location, setLocation] = useLocation();
  const [currentDemoIndex, setCurrentDemoIndex] = useState(0);

  const demos = [
    { id: "1", title: "Commercial Voice Over", duration: "0:45" },
    { id: "2", title: "Video Game Character", duration: "1:23" },
    { id: "3", title: "Documentary Narration", duration: "2:10" },
    { id: "4", title: "Animation Voice", duration: "1:05" },
  ];

  const getActiveTab = () => {
    if (location === "/" || location.startsWith("/profile")) return "me";
    if (location.startsWith("/followers") || location.startsWith("/connections")) return "them";
    if (location.startsWith("/stats") || location.startsWith("/notifications")) return "stats";
    if (location.startsWith("/edit")) return "edit";
    if (location.startsWith("/lists") || location.startsWith("/groups") || location.startsWith("/shop")) return "label";
    if (location.startsWith("/search")) return "search";
    return "me";
  };

  const handleTabChange = (tab: string) => {
    if (userRole === "artist") {
      const routes: Record<string, string> = {
        me: "/profile",
        them: "/followers",
        stats: "/stats",
        edit: "/edit-profile",
        label: "/lists",
        search: "/search",
      };
      setLocation(routes[tab] || "/profile");
    } else {
      const routes: Record<string, string> = {
        me: "/profile",
        them: "/connections",
        stats: "/notifications",
        edit: "/edit-profile",
        label: "/groups",
        search: "/search",
      };
      setLocation(routes[tab] || "/connections");
    }
  };

  useEffect(() => {
    if (location === "/") {
      setLocation(userRole === "artist" ? "/profile" : "/connections");
    }
  }, [location, userRole, setLocation]);

  return (
    // Mobile-first: Fixed width container to simulate real mobile device
    <div className="min-h-screen bg-background flex items-start justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-background relative shadow-2xl">
        <main className="pb-16 overflow-x-hidden">
          <Switch>
            {userRole === "artist" ? (
              <>
                <Route path="/" component={ProfilePage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/followers" component={FollowersPage} />
                <Route path="/stats" component={StatsPage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/lists" component={ListsPage} />
                <Route path="/edit-profile" component={EditProfilePage} />
                <Route path="/edit-demos" component={EditDemosPage} />
                <Route path="/search" component={SearchPage} />
              </>
            ) : (
              <>
                <Route path="/" component={ConnectionsPage} />
                <Route path="/profile" component={EditProfilePage} />
                <Route path="/connections" component={ConnectionsPage} />
                <Route path="/notifications" component={NotificationsPage} />
                <Route path="/groups" component={GroupsPage} />
                <Route path="/edit-profile" component={EditProfilePage} />
                <Route path="/search" component={SearchPage} />
              </>
            )}
          </Switch>
        </main>

        {userRole === "artist" && (
          <AudioPlayer
            demos={demos}
            currentIndex={currentDemoIndex}
            onDemoChange={setCurrentDemoIndex}
          />
        )}

        <BottomNav
          activeTab={getActiveTab()}
          onTabChange={handleTabChange}
          userType={userRole}
        />
      </div>
    </div>
  );
}

function App() {
  const [userRole, setUserRole] = useState<"artist" | "producer" | null>(null);

  if (!userRole) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <RoleSelector onSelectRole={setUserRole} />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContent userRole={userRole} />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
