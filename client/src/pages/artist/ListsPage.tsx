import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, FolderOpen, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ListsPage() {
  const [lists, setLists] = useState([
    { id: "1", name: "Gaming Voices", count: 21, color: "from-primary to-brand-coral" },
    { id: "2", name: "Advertising Clients", count: 4, color: "from-brand-cyan to-primary" },
    { id: "3", name: "US Based Producers", count: 18, color: "from-brand-yellow to-brand-green" },
  ]);
  const [newListName, setNewListName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateList = () => {
    if (newListName.trim()) {
      setLists([...lists, {
        id: Date.now().toString(),
        name: newListName,
        count: 0,
        color: "from-primary to-brand-coral",
      }]);
      setNewListName("");
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10 px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <FolderOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">My Lists</h1>
              <p className="text-xs text-muted-foreground">{lists.length} collections</p>
            </div>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="icon" className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-brand-coral" data-testid="button-create-list">
                <Plus className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New List</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="list-name">List Name</Label>
                  <Input
                    id="list-name"
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                    placeholder="e.g., Animation Voices"
                    className="h-11"
                    data-testid="input-list-name"
                  />
                </div>
                <Button onClick={handleCreateList} className="w-full h-11" data-testid="button-save-list">
                  Create List
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Lists */}
      <div className="px-5 py-4 space-y-3">
        {lists.map((list) => (
          <button
            key={list.id}
            className="w-full text-left rounded-2xl p-5 bg-card border border-border hover:bg-muted/30 transition-all"
            onClick={() => console.log(`Opening list: ${list.name}`)}
          >
            <div className="flex items-center gap-4">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${list.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                <FolderOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-base mb-1">{list.name}</div>
                <div className="text-sm text-muted-foreground">{list.count} producers</div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
