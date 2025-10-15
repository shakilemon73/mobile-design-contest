import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Folder } from "lucide-react";

interface ListCardProps {
  name: string;
  count: number;
  onClick?: () => void;
}

export default function ListCard({ name, count, onClick }: ListCardProps) {
  return (
    <Card
      className="p-5 hover-elevate cursor-pointer group transition-all"
      onClick={onClick}
      data-testid={`card-list-${name}`}
    >
      <div className="flex items-center gap-4">
        <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
          <Folder className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-base mb-1" data-testid={`text-list-name-${name}`}>
            {name}
          </h4>
          <p className="text-sm text-muted-foreground">
            {count} {count === 1 ? 'artist' : 'artists'}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Badge variant="secondary" className="font-semibold">{count}</Badge>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </Card>
  );
}
