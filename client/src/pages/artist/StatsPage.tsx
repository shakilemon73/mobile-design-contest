import { TrendingUp, Users, Play, Eye, ArrowUp, Calendar, Map } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function StatsPage() {
  const [, setLocation] = useLocation();
  const stats = [
    { label: "Followers", value: "214", change: "+12%", changeValue: "+26", period: "this week", icon: Users, color: "from-primary to-brand-coral" },
    { label: "Total Plays", value: "4,847", change: "+24%", changeValue: "+932", period: "this week", icon: Play, color: "from-brand-cyan to-primary" },
    { label: "Profile Views", value: "1,253", change: "+8%", changeValue: "+93", period: "this week", icon: Eye, color: "from-brand-yellow to-brand-coral" },
  ];

  const topDemos = [
    { title: "Documentary Narration", plays: "2.1K", trend: "+15%" },
    { title: "Commercial Voice Over", plays: "1.2K", trend: "+8%" },
    { title: "Video Game Character", plays: "856", trend: "+22%" },
  ];

  const recentViews = [
    { name: "Creative Producer Ltd", time: "2h ago", avatar: "CP" },
    { name: "Animation Studios", time: "5h ago", avatar: "AS" },
    { name: "Gaming Voice Co", time: "1d ago", avatar: "GV" },
    { name: "Documentary Films", time: "2d ago", avatar: "DF" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header - Clear page context */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10 px-6 py-5">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-brand-green/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-brand-green" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Your Performance</h1>
              <p className="text-sm text-muted-foreground">Track your growth and engagement</p>
            </div>
          </div>
          <Button 
            size="icon" 
            variant="outline"
            onClick={() => setLocation("/map")}
            className="h-10 w-10 rounded-full"
            data-testid="button-map"
          >
            <Map className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-8">
        {/* Key Metrics - Don Norman: Clear visual hierarchy */}
        <div className="space-y-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl p-5 bg-card border border-border"
              >
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 h-32 w-32 bg-gradient-to-br ${stat.color} opacity-5 rounded-full blur-3xl`} />
                
                <div className="relative space-y-3">
                  {/* Label */}
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                  </div>

                  {/* Value - Pablo: Clear typography */}
                  <div className="flex items-end gap-4">
                    <div className="text-4xl font-bold">{stat.value}</div>
                    <Badge className="mb-1 bg-brand-green/10 text-brand-green border-0 gap-1 px-2 py-0.5">
                      <ArrowUp className="h-3 w-3" />
                      <span className="text-xs font-semibold">{stat.change}</span>
                    </Badge>
                  </div>

                  {/* Details - Luke: Scannable info */}
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{stat.changeValue}</span> {stat.period}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Top Performing Demos - Gaurav: Clean sections */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Top Performing Demos</h2>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Last 7 days</span>
            </div>
          </div>

          <div className="space-y-2">
            {topDemos.map((demo, index) => (
              <div
                key={demo.title}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
              >
                {/* Rank */}
                <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  index === 0 
                    ? 'bg-brand-yellow/20 text-brand-yellow' 
                    : index === 1
                    ? 'bg-muted/50 text-foreground'
                    : 'bg-muted/30 text-muted-foreground'
                }`}>
                  {index + 1}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm mb-1 truncate">{demo.title}</div>
                  <div className="text-xs text-muted-foreground">{demo.plays} plays</div>
                </div>

                {/* Trend */}
                <Badge variant="secondary" className="bg-brand-green/10 text-brand-green border-0 gap-1 px-2">
                  <ArrowUp className="h-3 w-3" />
                  <span className="text-xs font-semibold">{demo.trend}</span>
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Profile Views */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Recent Profile Views</h2>

          <div className="space-y-2">
            {recentViews.map((view) => (
              <button
                key={view.name}
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all text-left"
                onClick={() => console.log(`View ${view.name}`)}
              >
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/10 to-brand-cyan/10 flex items-center justify-center font-semibold text-xs flex-shrink-0">
                  {view.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{view.name}</div>
                  <div className="text-xs text-muted-foreground">{view.time}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
