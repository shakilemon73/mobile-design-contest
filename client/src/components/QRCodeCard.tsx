import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Download } from "lucide-react";

interface QRCodeCardProps {
  profileUrl: string;
  onShare?: () => void;
  onDownload?: () => void;
}

export default function QRCodeCard({ profileUrl, onShare, onDownload }: QRCodeCardProps) {
  return (
    <Card className="p-6 hover-elevate">
      <div className="flex flex-col items-center gap-5">
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-semibold">Share Your Profile</h3>
          <p className="text-sm text-muted-foreground">
            Scan this QR code to view profile instantly
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border-4 border-primary shadow-lg">
          <div className="w-44 h-44 bg-gray-900 relative">
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
        
        <div className="flex gap-3 w-full">
          {onShare && (
            <Button 
              onClick={onShare} 
              className="gap-2 flex-1" 
              size="lg"
              data-testid="button-share-qr"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          )}
          {onDownload && (
            <Button 
              onClick={onDownload} 
              variant="secondary"
              className="gap-2 flex-1" 
              size="lg"
              data-testid="button-download-qr"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
