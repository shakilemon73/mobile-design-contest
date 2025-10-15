import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface QRCodeCardProps {
  profileUrl: string;
  onShare?: () => void;
}

export default function QRCodeCard({ profileUrl, onShare }: QRCodeCardProps) {
  return (
    <Card className="p-6 flex flex-col items-center gap-4">
      <h3 className="text-lg font-semibold">QR Code</h3>
      <div className="bg-white p-6 rounded-md border-4 border-primary">
        <div className="w-40 h-40 bg-gray-900 relative">
          <div className="absolute inset-4 grid grid-cols-8 gap-1">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className={`${Math.random() > 0.5 ? "bg-gray-900" : "bg-white"} rounded-sm`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        Scan to view profile
      </p>
      {onShare && (
        <Button onClick={onShare} className="gap-2 w-full" data-testid="button-share-qr">
          <Share2 className="h-4 w-4" />
          Share QR Code
        </Button>
      )}
    </Card>
  );
}
