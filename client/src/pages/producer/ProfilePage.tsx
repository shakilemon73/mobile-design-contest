import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Play, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProducerProfilePage() {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [notes, setNotes] = useState("");

  const demos = [
    { id: "1", title: "Demo 1", duration: "0:45" },
    { id: "2", title: "Demo 2", duration: "1:23" },
    { id: "3", title: "Demo 3", duration: "2:10" },
    { id: "4", title: "Demo 4", duration: "1:05" },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Notes saved successfully",
        description: "Your notes have been updated.",
        duration: 3000,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10 px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-brand-cyan/20 to-primary/20 flex items-center justify-center font-bold text-lg">
            UN
          </div>
          <div>
            <h1 className="text-2xl font-bold">User Name</h1>
            <p className="text-sm text-muted-foreground">Producer</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Demos Section */}
        <div className="space-y-3">
          <h3 className="text-base font-bold">My Demos</h3>
          <div className="space-y-2">
            {demos.map((demo) => (
              <button
                key={demo.id}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:bg-muted/30 transition-all"
                onClick={() => console.log(`Playing ${demo.title}`)}
                data-testid={`button-play-demo-${demo.id}`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">{demo.title}</div>
                    <div className="text-xs text-muted-foreground">{demo.duration}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Notes Section */}
        <div className="space-y-3">
          <Label htmlFor="notes" className="text-base font-bold">Notes</Label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={6}
            className="resize-none text-[15px] leading-relaxed"
            data-testid="input-notes"
            placeholder="Add notes about projects, ideas, or reminders..."
          />
        </div>

        {/* Save Button */}
        <Button 
          onClick={handleSave} 
          disabled={isSaving}
          className="w-full h-12 font-semibold bg-gradient-to-r from-primary to-brand-coral shadow-lg gap-2" 
          data-testid="button-save-notes"
        >
          {isSaving ? (
            <>
              <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              Save
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
