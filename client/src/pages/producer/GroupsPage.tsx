import { useState } from "react";
import ListCard from "@/components/ListCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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
    { id: "1", name: "Favourites", count: 21 },
    { id: "2", name: "Australians", count: 4 },
    { id: "3", name: "Soul Singers", count: 18 },
    { id: "4", name: "Gaming Voices", count: 18 },
  ]);
  const [newGroupName, setNewGroupName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateGroup = () => {
    if (newGroupName.trim()) {
      const newGroup = {
        id: Date.now().toString(),
        name: newGroupName,
        count: 0,
      };
      setGroups([...groups, newGroup]);
      setNewGroupName("");
      setIsDialogOpen(false);
      console.log(`Created group: ${newGroupName}`);
    }
  };

  return (
    <div className="pb-20">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Groups</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button data-testid="button-create-group" className="gap-2">
                <Plus className="h-4 w-4" />
                Create New Group
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Group</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div>
                  <Label htmlFor="group-name">Group Name</Label>
                  <Input
                    id="group-name"
                    value={newGroupName}
                    onChange={(e) => setNewGroupName(e.target.value)}
                    placeholder="e.g., British Accents"
                    data-testid="input-group-name"
                  />
                </div>
                <Button onClick={handleCreateGroup} className="w-full" data-testid="button-save-group">
                  Create Group
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {groups.map((group) => (
          <ListCard
            key={group.id}
            name={group.name}
            count={group.count}
            onClick={() => console.log(`Opening group: ${group.name}`)}
          />
        ))}
      </div>
    </div>
  );
}
