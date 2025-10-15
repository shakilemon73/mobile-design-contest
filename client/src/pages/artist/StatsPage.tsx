import StatCard from "@/components/StatCard";
import ViewerCard from "@/components/ViewerCard";
import { Users, Play, Eye } from "lucide-react";

export default function StatsPage() {
  const stats = [
    { icon: Users, value: 14, label: "Followers", color: "text-primary" },
    { icon: Play, value: 284, label: "Plays", color: "text-brand-cyan" },
    { icon: Eye, value: 67, label: "Views", color: "text-brand-coral" },
  ];

  const recentViewers = [
    { id: "1", name: "Producer 1", date: "11 Nov 24" },
    { id: "2", name: "Producer 2", date: "08 Nov 24" },
    { id: "3", name: "Producer 3", date: "01 Nov 24" },
    { id: "4", name: "Producer 4", date: "29 Oct 24" },
    { id: "5", name: "Producer 5", date: "26 Oct 24" },
  ];

  return (
    <div className="pb-20">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold">My Stats</h1>
      </div>

      <div className="p-4 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Recent Viewers</h2>
          <div className="space-y-2">
            {recentViewers.map((viewer) => (
              <ViewerCard
                key={viewer.id}
                name={viewer.name}
                date={viewer.date}
                onClick={() => console.log(`Viewing ${viewer.name} profile`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
