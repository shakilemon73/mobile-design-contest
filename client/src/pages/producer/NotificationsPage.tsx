import { Bell, Music, User } from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    {
      id: "1",
      artistName: "Robin Cousins",
      artistAvatar: "RC",
      message: "uploaded a new commercial demo",
      timestamp: "2 hours ago",
      isUnread: true,
      type: "demo" as const,
    },
    {
      id: "2",
      artistName: "Sarah Mitchell",
      artistAvatar: "SM",
      message: "updated their profile with new specialties",
      timestamp: "5 hours ago",
      isUnread: true,
      type: "profile" as const,
    },
    {
      id: "3",
      artistName: "James Anderson",
      artistAvatar: "JA",
      message: "added 3 new documentary samples",
      timestamp: "1 day ago",
      isUnread: false,
      type: "demo" as const,
    },
    {
      id: "4",
      artistName: "Emily Chen",
      artistAvatar: "EC",
      message: "updated their availability calendar",
      timestamp: "2 days ago",
      isUnread: false,
      type: "profile" as const,
    },
    {
      id: "5",
      artistName: "Michael Brown",
      artistAvatar: "MB",
      message: "uploaded a gaming character reel",
      timestamp: "3 days ago",
      isUnread: false,
      type: "demo" as const,
    },
  ];

  const unreadCount = notifications.filter(n => n.isUnread).length;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-b from-brand-yellow/10 to-background border-b border-border z-10 px-5 py-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-brand-yellow/20 flex items-center justify-center relative">
            <Bell className="h-5 w-5 text-brand-yellow" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-brand-yellow text-white text-xs font-bold flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-xs text-muted-foreground">{unreadCount} unread</p>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-5 py-4 space-y-2">
        {notifications.map((notification) => (
          <button
            key={notification.id}
            className={`w-full text-left rounded-2xl p-4 transition-all ${
              notification.isUnread 
                ? 'bg-primary/5 border border-primary/20' 
                : 'bg-card border border-border hover:bg-muted/30'
            }`}
            onClick={() => console.log(`Clicked notification from ${notification.artistName}`)}
          >
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-brand-cyan/20 flex items-center justify-center font-semibold text-xs flex-shrink-0">
                {notification.artistAvatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm">{notification.artistName}</span>
                  {notification.type === "demo" ? (
                    <Music className="h-3 w-3 text-primary" />
                  ) : (
                    <User className="h-3 w-3 text-brand-cyan" />
                  )}
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {notification.message}
                </div>
                <div className="text-xs text-muted-foreground">
                  {notification.timestamp}
                </div>
              </div>
              {notification.isUnread && (
                <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
