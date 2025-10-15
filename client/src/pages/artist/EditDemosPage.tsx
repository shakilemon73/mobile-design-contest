import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, GripVertical, Music, Upload } from "lucide-react";

export default function EditDemosPage() {
  const [demos, setDemos] = useState([
    { id: "1", title: "Commercial Voice Over", file: "commercial.mp3" },
    { id: "2", title: "Video Game Character", file: "gaming.mp3" },
    { id: "3", title: "Documentary Narration", file: "documentary.mp3" },
    { id: "4", title: "Animation Voice", file: "animation.mp3" },
  ]);

  const handleDelete = (id: string) => {
    setDemos(demos.filter((d) => d.id !== id));
  };

  const handleAddNew = () => {
    setDemos([...demos, {
      id: Date.now().toString(),
      title: `Demo ${demos.length + 1}`,
      file: "",
    }]);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-b from-primary/10 to-background border-b border-border z-10 px-5 py-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Music className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Manage Demos</h1>
        </div>
        <p className="text-sm text-muted-foreground">Organize your voice samples</p>
      </div>

      {/* Demos List */}
      <div className="px-5 py-4 space-y-3">
        {demos.map((demo, index) => (
          <div key={demo.id} className="rounded-2xl p-4 bg-card border border-border">
            <div className="flex items-start gap-3 mb-3">
              <button className="pt-1 cursor-move">
                <GripVertical className="h-5 w-5 text-muted-foreground" />
              </button>
              <div className="flex-1 space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor={`title-${demo.id}`} className="text-xs text-muted-foreground">Demo Title</Label>
                  <Input
                    id={`title-${demo.id}`}
                    value={demo.title}
                    onChange={(e) => {
                      const updated = demos.map((d) =>
                        d.id === demo.id ? { ...d, title: e.target.value } : d
                      );
                      setDemos(updated);
                    }}
                    className="h-10"
                    data-testid={`input-demo-title-${index}`}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`file-${demo.id}`} className="text-xs text-muted-foreground">Audio File</Label>
                  <div className="flex gap-2">
                    <Input
                      id={`file-${demo.id}`}
                      type="file"
                      accept="audio/*"
                      className="h-10 flex-1"
                      data-testid={`input-demo-file-${index}`}
                    />
                    <Button size="icon" variant="outline" className="h-10 w-10 flex-shrink-0">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                  {demo.file && (
                    <p className="text-xs text-muted-foreground">
                      Current: {demo.file}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleDelete(demo.id)}
                className="pt-1 text-destructive"
                data-testid={`button-delete-demo-${index}`}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}

        {/* Add New */}
        <button
          className="w-full rounded-2xl p-6 border-2 border-dashed border-muted-foreground/25 hover:border-primary hover:bg-primary/5 transition-all"
          onClick={handleAddNew}
          data-testid="button-add-demo"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
              <Plus className="h-6 w-6" />
            </div>
            <div className="font-semibold">Add New Demo</div>
          </div>
        </button>
      </div>
    </div>
  );
}
