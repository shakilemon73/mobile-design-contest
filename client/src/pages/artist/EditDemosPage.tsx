import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, GripVertical } from "lucide-react";

export default function EditDemosPage() {
  const [demos, setDemos] = useState([
    { id: "1", title: "Demo 1", file: "demo1.mp3" },
    { id: "2", title: "Demo 2", file: "demo2.mp3" },
    { id: "3", title: "Demo 3", file: "demo3.mp3" },
    { id: "4", title: "Demo 4", file: "demo4.mp3" },
  ]);

  const handleDelete = (id: string, title: string) => {
    setDemos(demos.filter((d) => d.id !== id));
    console.log(`Deleted demo: ${title}`);
  };

  const handleAddNew = () => {
    const newDemo = {
      id: Date.now().toString(),
      title: `Demo ${demos.length + 1}`,
      file: "",
    };
    setDemos([...demos, newDemo]);
    console.log("Adding new demo");
  };

  return (
    <div className="pb-20">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold">Edit Demos</h1>
      </div>

      <div className="p-4 space-y-3">
        {demos.map((demo, index) => (
          <Card key={demo.id} className="p-4">
            <div className="flex items-start gap-3">
              <GripVertical className="h-5 w-5 text-muted-foreground mt-1 cursor-move" />
              <div className="flex-1 space-y-3">
                <div>
                  <Label htmlFor={`title-${demo.id}`}>Title</Label>
                  <Input
                    id={`title-${demo.id}`}
                    value={demo.title}
                    onChange={(e) => {
                      const updated = demos.map((d) =>
                        d.id === demo.id ? { ...d, title: e.target.value } : d
                      );
                      setDemos(updated);
                    }}
                    data-testid={`input-demo-title-${index}`}
                  />
                </div>
                <div>
                  <Label htmlFor={`file-${demo.id}`}>Audio File</Label>
                  <Input
                    id={`file-${demo.id}`}
                    type="file"
                    accept="audio/*"
                    data-testid={`input-demo-file-${index}`}
                  />
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(demo.id, demo.title)}
                data-testid={`button-delete-demo-${index}`}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </Card>
        ))}

        <Card
          className="p-8 border-2 border-dashed border-muted hover-elevate cursor-pointer"
          onClick={handleAddNew}
          data-testid="button-add-demo"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Plus className="h-8 w-8" />
            <span className="font-medium">Add New Demo</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
