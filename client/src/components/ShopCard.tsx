import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ShopCardProps {
  title: string;
  price: string;
  remaining?: number;
  onPurchase?: () => void;
}

export default function ShopCard({ title, price, remaining, onPurchase }: ShopCardProps) {
  return (
    <Card className="p-6 border-2 border-brand-yellow hover-elevate">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold" data-testid={`text-shop-${title}`}>
            {title}
          </h3>
          {remaining !== undefined && (
            <Badge variant="secondary" className="mt-2">
              {remaining} left
            </Badge>
          )}
        </div>
        <div className="text-3xl font-bold text-brand-yellow">{price}</div>
        {onPurchase && (
          <Button
            onClick={onPurchase}
            className="w-full bg-gradient-to-r from-brand-pink to-brand-coral"
            data-testid={`button-purchase-${title}`}
          >
            Purchase
          </Button>
        )}
      </div>
    </Card>
  );
}
