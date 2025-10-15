import { useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import DemoCard from "@/components/DemoCard";
import QRCodeCard from "@/components/QRCodeCard";

export default function ProfilePage() {
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    { id: "1", title: "Demo 1", duration: "0:45" },
    { id: "2", title: "Demo 2", duration: "1:23" },
    { id: "3", title: "Demo 3", duration: "2:10" },
    { id: "4", title: "Demo 4", duration: "1:05" },
  ];

  const handleShare = () => {
    console.log("Share profile clicked");
  };

  return (
    <div className="pb-32 space-y-6">
      <ProfileHeader
        name="User Name"
        bio="Proin non vestibulum erat, eu varius leo. Suspendisse sit amet ullamcorper libero. Phasellus nunc lectus, venenatis gravida faucibus vel, lacinia in lorem."
        social={{
          instagram: "username",
          twitter: "username",
          website: "https://example.com",
        }}
        onShare={handleShare}
      />

      <div className="px-4 space-y-3">
        <h2 className="text-xl font-semibold">Demos</h2>
        {demos.map((demo, index) => (
          <DemoCard
            key={demo.id}
            title={demo.title}
            duration={demo.duration}
            isPlaying={currentDemo === index}
            onPlay={() => {
              setCurrentDemo(index);
              console.log(`Playing ${demo.title}`);
            }}
          />
        ))}
      </div>

      <div className="px-4">
        <QRCodeCard profileUrl="https://audiotag.app/username" onShare={handleShare} />
      </div>
    </div>
  );
}
