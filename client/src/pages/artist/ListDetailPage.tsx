import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRoute } from "wouter";

export default function ListDetailPage() {
  const [, params] = useRoute("/list/:id");
  const listId = params?.id || "unknown";
  
  // In a real app, you'd fetch list data and producers based on listId
  const listName = `List ${listId}`;
  
  const producers = [
    { id: "1", name: "Producer 1", avatar: "P1" },
    { id: "2", name: "Producer 2", avatar: "P2" },
    { id: "3", name: "Producer 3", avatar: "P3" },
    { id: "4", name: "Producer 4", avatar: "P4" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10 px-6 py-5">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-1">{listName}</h1>
          <p className="text-sm text-muted-foreground">{producers.length} producers</p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search in this list..."
            className="pl-10 h-11 rounded-full bg-muted/50"
            data-testid="input-search-list"
          />
        </div>
      </div>

      {/* Producers Grid */}
      <div className="px-6 py-4 grid grid-cols-2 gap-3">
        {producers.map((producer) => (
          <button
            key={producer.id}
            className="rounded-2xl p-5 bg-card border border-border hover:bg-muted/30 transition-all text-center"
            onClick={() => console.log(`Viewing ${producer.name}`)}
            data-testid={`button-producer-${producer.id}`}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-brand-cyan/20 to-primary/20 flex items-center justify-center font-semibold">
                {producer.avatar}
              </div>
              <div className="w-full">
                <div className="font-semibold text-sm truncate">{producer.name}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
