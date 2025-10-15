import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

interface ListCardProps {
  name: string;
  count: number;
  onClick?: () => void;
}

export default function ListCard({ name, count, onClick }: ListCardProps) {
  return (
    <Card
      className="p-4 hover-elevate cursor-pointer"
      onClick={onClick}
      data-testid={`card-list-${name}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="font-semibold" data-testid={`text-list-name-${name}`}>
            {name}
          </h4>
          <p className="text-sm text-muted-foreground">{count} {count === 1 ? 'item' : 'items'}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{count}</Badge>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </Card>
  );
}
