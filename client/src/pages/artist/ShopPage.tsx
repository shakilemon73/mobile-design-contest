import { TrendingUp, Sparkles, Zap, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShopPage() {
  const products = [
    {
      id: "1",
      title: "Boost Profile",
      description: "Increase visibility and reach more producers",
      price: "£10",
      icon: TrendingUp,
      gradient: "from-primary to-brand-coral",
      remaining: null,
    },
    {
      id: "2",
      title: "Feature Me",
      description: "Get featured on homepage with premium placement",
      price: "£20",
      icon: Sparkles,
      gradient: "from-brand-yellow to-brand-coral",
      remaining: 12,
    },
    {
      id: "3",
      title: "25 Nudges",
      description: "Send notifications to interested producers",
      price: "£5",
      icon: Zap,
      gradient: "from-brand-cyan to-primary",
      remaining: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-b from-primary/10 to-background border-b border-border z-10 px-5 py-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <ShoppingBag className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Grow Your Reach</h1>
        </div>
        <p className="text-sm text-muted-foreground">Boost visibility and connect with more opportunities</p>
      </div>

      {/* Products */}
      <div className="px-5 py-6 space-y-4">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-2xl p-6 bg-card border border-border"
            >
              {/* Gradient Background */}
              <div className={`absolute top-0 right-0 h-40 w-40 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-3xl`} />
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold">{product.title}</h3>
                      <div className="text-xl font-bold">{product.price}</div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {product.remaining && (
                  <div className="mb-4 px-3 py-2 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-semibold inline-block">
                    Only {product.remaining} left!
                  </div>
                )}

                <Button 
                  className={`w-full h-11 font-semibold bg-gradient-to-r ${product.gradient} shadow-lg`}
                  data-testid={`button-purchase-${product.id}`}
                >
                  Purchase Now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
