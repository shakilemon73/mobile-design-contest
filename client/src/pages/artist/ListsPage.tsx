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

export default function ListsPage() {
  const [lists, setLists] = useState([
    { id: "1", name: "Gaming voices", count: 21 },
    { id: "2", name: "Advertising", count: 4 },
    { id: "3", name: "US Based", count: 18 },
  ]);
  const [newListName, setNewListName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateList = () => {
    if (newListName.trim()) {
      const newList = {
        id: Date.now().toString(),
        name: newListName,
        count: 0,
      };
      setLists([...lists, newList]);
      setNewListName("");
      setIsDialogOpen(false);
      console.log(`Created list: ${newListName}`);
    }
  };

  return (
    <div className="pb-20">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Lists</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button data-testid="button-create-list" className="gap-2">
                <Plus className="h-4 w-4" />
                Create New List
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New List</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div>
                  <Label htmlFor="list-name">List Name</Label>
                  <Input
                    id="list-name"
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                    placeholder="e.g., Animation Voices"
                    data-testid="input-list-name"
                  />
                </div>
                <Button onClick={handleCreateList} className="w-full" data-testid="button-save-list">
                  Create List
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {lists.map((list) => (
          <ListCard
            key={list.id}
            name={list.name}
            count={list.count}
            onClick={() => console.log(`Opening list: ${list.name}`)}
          />
        ))}
      </div>
    </div>
  );
}
