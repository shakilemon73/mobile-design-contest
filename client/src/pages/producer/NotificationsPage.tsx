import NotificationCard from "@/components/NotificationCard";

export default function NotificationsPage() {
  const notifications = [
    {
      id: "1",
      artistName: "Artist 1",
      message: "Uploaded a new demo",
      timestamp: "2 hours ago",
      isUnread: true,
    },
    {
      id: "2",
      artistName: "Artist 2",
      message: "Updated their profile",
      timestamp: "5 hours ago",
      isUnread: true,
    },
    {
      id: "3",
      artistName: "Artist 1",
      message: "Updated their profile",
      timestamp: "1 day ago",
      isUnread: false,
    },
    {
      id: "4",
      artistName: "Artist 2",
      message: "Updated their profile",
      timestamp: "2 days ago",
      isUnread: false,
    },
    {
      id: "5",
      artistName: "Artist 1",
      message: "Uploaded a new demo",
      timestamp: "3 days ago",
      isUnread: false,
    },
  ];

  return (
    <div className="pb-20">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold">My Notifications</h1>
      </div>

      <div className="p-4 space-y-2">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            artistName={notification.artistName}
            message={notification.message}
            timestamp={notification.timestamp}
            isUnread={notification.isUnread}
            onClick={() => console.log(`Clicked notification from ${notification.artistName}`)}
          />
        ))}
      </div>
    </div>
  );
}
