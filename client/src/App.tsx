import { useState } from "react";
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

function App() {
  const [userRole, setUserRole] = useState<"artist" | "producer" | null>(null);
  const [activeTab, setActiveTab] = useState("me");
  const [currentDemoIndex, setCurrentDemoIndex] = useState(0);

  const demos = [
    { id: "1", title: "Commercial Voice Over", duration: "0:45" },
    { id: "2", title: "Video Game Character", duration: "1:23" },
    { id: "3", title: "Documentary Narration", duration: "2:10" },
    { id: "4", title: "Animation Voice", duration: "1:05" },
  ];

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

  const renderArtistContent = () => {
    switch (activeTab) {
      case "me":
        return <ProfilePage />;
      case "them":
        return <FollowersPage />;
      case "stats":
        return <StatsPage />;
      case "edit":
        return <EditProfilePage />;
      case "label":
        return <ListsPage />;
      case "search":
        return <SearchPage />;
      default:
        return <ProfilePage />;
    }
  };

  const renderProducerContent = () => {
    switch (activeTab) {
      case "me":
        return <EditProfilePage />;
      case "them":
        return <ConnectionsPage />;
      case "stats":
        return <NotificationsPage />;
      case "edit":
        return <EditProfilePage />;
      case "label":
        return <GroupsPage />;
      case "search":
        return <SearchPage />;
      default:
        return <ConnectionsPage />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <main className="pb-16">
            {userRole === "artist" ? renderArtistContent() : renderProducerContent()}
          </main>

          {userRole === "artist" && (
            <AudioPlayer
              demos={demos}
              currentIndex={currentDemoIndex}
              onDemoChange={setCurrentDemoIndex}
            />
          )}

          <BottomNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            userType={userRole}
          />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
