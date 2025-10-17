import { useState } from "react";
import { Plus, Trash2, GripVertical, Music, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LargeTitle } from "@/components/ios/LargeTitle";
import { PageContainer } from "@/components/ios/PageContainer";
import { BlurCard } from "@/components/ios/BlurCard";
import { IOSButton } from "@/components/ios/IOSButton";

export default function EditDemosPage() {
  const [demos, setDemos] = useState([
    { id: "1", title: "Commercial Voice Over", file: "commercial.mp3", plays: "2.1K" },
    { id: "2", title: "Video Game Character", file: "gaming.mp3", plays: "1.2K" },
    { id: "3", title: "Documentary Narration", file: "documentary.mp3", plays: "856" },
    { id: "4", title: "Animation Voice", file: "animation.mp3", plays: "634" },
  ]);

  const handleDelete = (id: string) => {
    setDemos(demos.filter((d) => d.id !== id));
  };

  const handleAddNew = () => {
    setDemos([...demos, {
      id: Date.now().toString(),
      title: `Demo ${demos.length + 1}`,
      file: "",
      plays: "0"
    }]);
  };

  return (
    <PageContainer>
      <div className="min-h-screen bg-background pb-20">
        <LargeTitle title="Manage Demos" />

        <div className="px-6 space-y-6">
          <div className="flex items-center justify-between">
            <BlurCard size="compact" className="flex-1">
              <div className="flex items-center gap-3">
                <Music className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <div className="headline">{demos.length} Demos</div>
                  <div className="caption-1 text-muted-foreground">Drag to reorder</div>
                </div>
              </div>
            </BlurCard>
            <button onClick={handleAddNew} className="ml-3 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" data-testid="button-add-demo">
              <Plus className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-3">
            {demos.map((demo, index) => (
              <BlurCard key={demo.id} size="compact">
                <div className="flex items-start gap-3">
                  <button className="pt-2 cursor-move">
                    <GripVertical className="h-5 w-5 text-muted-foreground" />
                  </button>
                  <div className="flex-1 space-y-3">
                    <div className="space-y-1.5">
                      <Label htmlFor={`title-${demo.id}`} className="caption-1 text-muted-foreground">Demo Title</Label>
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
                    {demo.file && (
                      <div className="flex items-center gap-2 caption-1 text-muted-foreground">
                        <TrendingUp className="h-3.5 w-3.5" />
                        <span>{demo.plays} plays</span>
                        <span>·</span>
                        <span>{demo.file}</span>
                      </div>
                    )}
                    <IOSButton variant="secondary" size="compact" className="w-full">
                      Replace Audio File
                    </IOSButton>
                  </div>
                  <button
                    onClick={() => handleDelete(demo.id)}
                    className="pt-2 text-destructive"
                    data-testid={`button-delete-demo-${index}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </BlurCard>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
