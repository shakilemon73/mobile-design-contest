import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRoute } from "wouter";

export default function ArtistViewPage() {
  const [, params] = useRoute("/artist/:id");
  const artistId = params?.id || "unknown";
  
  const { toast } = useToast();
  const [notes, setNotes] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  
  // In a real app, you'd fetch artist data based on artistId
  const artistName = `Artist ${artistId}`;

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

  const handleRemoveFollower = () => {
    toast({
      title: "Follower removed",
      description: "This artist has been removed from your connections.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-10 px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-brand-coral/20 flex items-center justify-center font-bold text-lg">
            UN
          </div>
          <div>
            <h1 className="text-2xl font-bold">{artistName}</h1>
            <p className="text-sm text-muted-foreground">Voice Artist • ID: {artistId}</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Bio */}
        <div className="space-y-3">
          <p className="text-[15px] leading-relaxed text-foreground">
            Proin non vestibulum erat, eu varius leo. Suspendisse sit amet ullamcorper 
            libero. Phasellus nunc lectus, venenatis gravida faucibus vel, lacinia in lorem. 
            Nunc magna arcu, ornare sit amet pulvinar eget, lobortis eu enim. Cras id 
            elit ultricies risus consectetur semper et nec erat. Quisque vel nisl in est 
            vehicula tincidunt sed sit amet arcu. Vivamus aliquet quam a iaculis 
            volutpat. Suspendisse auctor consequat velit venenatis blandit. Cras 
            condimentum justo quis dictum vestibulum.
          </p>
        </div>

        {/* Notes Section */}
        <div className="space-y-3">
          <Label htmlFor="notes" className="text-base font-bold">Notes</Label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="resize-none text-[15px] leading-relaxed"
            data-testid="input-artist-notes"
            placeholder="Add private notes about this artist..."
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="w-full h-12 font-semibold bg-gradient-to-r from-primary to-brand-coral shadow-lg gap-2" 
            data-testid="button-save-artist-notes"
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

          <Button 
            onClick={handleRemoveFollower}
            variant="outline"
            className="w-full h-12 font-semibold border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground" 
            data-testid="button-remove-follower"
          >
            Remove Follower
          </Button>
        </div>
      </div>
    </div>
  );
}
