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

export default function GroupsPage() {
  const [groups, setGroups] = useState([
    { id: "1", name: "Favourites", count: 21, color: "from-brand-yellow to-brand-coral" },
    { id: "2", name: "UK Based", count: 8, color: "from-brand-cyan to-primary" },
    { id: "3", name: "Animation Specialists", count: 15, color: "from-primary to-brand-coral" },
    { id: "4", name: "Gaming Voices", count: 12, color: "from-brand-green to-brand-cyan" },
  ]);
  const [newGroupName, setNewGroupName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateGroup = () => {
    if (newGroupName.trim()) {
      setGroups([...groups, {
        id: Date.now().toString(),
        name: newGroupName,
        count: 0,
        color: "from-primary to-brand-coral",
      }]);
      setNewGroupName("");
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10 px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-brand-cyan/20 flex items-center justify-center">
              <FolderOpen className="h-5 w-5 text-brand-cyan" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">My Groups</h1>
              <p className="text-xs text-muted-foreground">{groups.length} collections</p>
            </div>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="icon" className="h-10 w-10 rounded-full bg-gradient-to-r from-brand-cyan to-primary" data-testid="button-create-group">
                <Plus className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Group</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="group-name">Group Name</Label>
                  <Input
                    id="group-name"
                    value={newGroupName}
                    onChange={(e) => setNewGroupName(e.target.value)}
                    placeholder="e.g., British Accents"
                    className="h-11"
                    data-testid="input-group-name"
                  />
                </div>
                <Button onClick={handleCreateGroup} className="w-full h-11" data-testid="button-save-group">
                  Create Group
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Groups List */}
      <div className="px-5 py-4 space-y-3">
        {groups.map((group) => (
          <button
            key={group.id}
            className="w-full text-left rounded-2xl p-5 bg-card border border-border hover:bg-muted/30 transition-all"
            onClick={() => console.log(`Opening group: ${group.name}`)}
          >
            <div className="flex items-center gap-4">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                <FolderOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-base mb-1">{group.name}</div>
                <div className="text-sm text-muted-foreground">{group.count} artists</div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
