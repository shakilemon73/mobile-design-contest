import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

interface ShopCardProps {
  title: string;
  description: string;
  price: string;
  remaining?: number;
  icon?: "sparkles" | "trending" | "zap";
  onPurchase?: () => void;
}

export default function ShopCard({ 
  title, 
  description,
  price, 
  remaining,
  icon = "sparkles",
  onPurchase 
}: ShopCardProps) {
  const icons = {
    sparkles: Sparkles,
    trending: TrendingUp,
    zap: Zap,
  };
  const Icon = icons[icon];

  return (
    <Card className="p-6 border-2 border-brand-yellow/20 hover:border-brand-yellow/40 hover-elevate transition-all">
      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
            <Icon className="h-6 w-6 text-brand-yellow" />
          </div>
          <div className="flex-1 min-w-0 space-y-1.5">
            <h3 className="text-xl font-bold" data-testid={`text-shop-${title}`}>
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-3xl font-bold text-brand-yellow">{price}</div>
            {remaining !== undefined && (
              <Badge variant="secondary" className="mt-2">
                {remaining} spots left
              </Badge>
            )}
          </div>
          {onPurchase && (
            <Button
              onClick={onPurchase}
              size="lg"
              className="bg-gradient-to-r from-brand-pink to-brand-coral hover:opacity-90 shadow-md px-8"
              data-testid={`button-purchase-${title}`}
            >
              Get Started
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
