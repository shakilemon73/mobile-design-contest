import { useState } from "react";
import { Plus, FolderOpen, ChevronRight, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LargeTitle } from "@/components/ios/LargeTitle";
import { PageContainer } from "@/components/ios/PageContainer";
import { IOSButton } from "@/components/ios/IOSButton";
import { BlurCard } from "@/components/ios/BlurCard";

export default function ListsPage() {
  const [lists, setLists] = useState([
    { id: "1", name: "Gaming Voices", count: 21, color: "from-primary to-brand-coral", updated: "2d ago" },
    { id: "2", name: "Advertising Clients", count: 4, color: "from-brand-cyan to-primary", updated: "1w ago" },
    { id: "3", name: "US Based Producers", count: 18, color: "from-brand-yellow to-brand-green", updated: "3d ago" },
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
        updated: "now"
      }]);
      setNewListName("");
      setIsDialogOpen(false);
    }
  };

  return (
    <PageContainer>
      <div className="min-h-screen bg-background pb-20">
        <LargeTitle title="My Lists" />

        <div className="px-6 space-y-6">
          <div className="flex items-center justify-between">
            <BlurCard size="compact" className="flex-1">
              <div className="text-center">
                <div className="title-2 mb-1">{lists.length}</div>
                <div className="caption-1 text-muted-foreground">Collections</div>
              </div>
            </BlurCard>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="ml-3 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" data-testid="button-create-list">
                  <Plus className="h-5 w-5" />
                </button>
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
                  <IOSButton onClick={handleCreateList} variant="primary" className="w-full" data-testid="button-save-list">
                    Create List
                  </IOSButton>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-3">
            {lists.map((list) => (
              <BlurCard
                key={list.id}
                size="compact"
                onClick={() => console.log(`Opening list: ${list.name}`)}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${list.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <FolderOpen className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="headline mb-0.5">{list.name}</div>
                    <div className="flex items-center gap-2 caption-1 text-muted-foreground">
                      <Users className="h-3.5 w-3.5" />
                      <span>{list.count} producers</span>
                      <span>·</span>
                      <span>Updated {list.updated}</span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
              </BlurCard>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
