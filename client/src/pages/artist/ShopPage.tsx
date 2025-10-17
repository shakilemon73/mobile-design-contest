import { TrendingUp, Sparkles, Zap, ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurCard } from "@/components/ios/BlurCard";
import { LargeTitle } from "@/components/ios/LargeTitle";
import { PageContainer } from "@/components/ios/PageContainer";

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
      badge: "Most Popular",
      features: ["Top of search results", "7 days featured", "3x more views"]
    },
    {
      id: "2",
      title: "Feature Me",
      description: "Get featured on homepage with premium placement",
      price: "£20",
      icon: Sparkles,
      gradient: "from-brand-yellow to-brand-coral",
      remaining: 12,
      badge: "Best Value",
      features: ["Homepage banner", "14 days featured", "Priority support"]
    },
    {
      id: "3",
      title: "25 Nudges",
      description: "Send notifications to interested producers",
      price: "£5",
      icon: Zap,
      gradient: "from-brand-cyan to-primary",
      remaining: null,
      badge: null,
      features: ["Direct notifications", "Smart targeting", "No expiry"]
    },
  ];

  return (
    <PageContainer>
      <div className="min-h-screen bg-background pb-20">
        <LargeTitle title="Grow Your Reach" />

        <div className="px-6 space-y-6">
          {/* Header Message */}
          <BlurCard>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="headline mb-1">Boost Your Visibility</h2>
                <p className="subheadline text-muted-foreground">
                  Connect with more opportunities and grow faster
                </p>
              </div>
            </div>
          </BlurCard>

          {/* Products */}
          <div className="space-y-4">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="relative overflow-hidden rounded-2xl p-6 bg-card border-2 border-border hover:border-primary/30 transition-all"
                >
                  {/* Gradient Background */}
                  <div className={`absolute top-0 right-0 h-40 w-40 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-3xl`} />
                  
                  <div className="relative space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <h3 className="headline mb-0.5">{product.title}</h3>
                            {product.badge && (
                              <span className="text-[10px] font-semibold text-primary uppercase tracking-wide">
                                {product.badge}
                              </span>
                            )}
                          </div>
                          <div className="title-2">{product.price}</div>
                        </div>
                        <p className="subheadline text-muted-foreground">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 caption-1 text-muted-foreground">
                          <Check className="h-4 w-4 text-[hsl(var(--brand-green))] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Limited Badge */}
                    {product.remaining && (
                      <div className="px-3 py-1.5 rounded-full bg-[hsl(var(--brand-yellow))]/10 text-[hsl(var(--brand-yellow))] caption-1 font-semibold inline-block">
                        🔥 Only {product.remaining} left this week!
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button 
                      className={`w-full h-12 font-semibold bg-gradient-to-r ${product.gradient} shadow-lg hover:shadow-xl transition-all`}
                      data-testid={`button-purchase-${product.id}`}
                    >
                      Purchase Now
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Proof */}
          <BlurCard size="compact">
            <div className="text-center space-y-2">
              <p className="headline">Join 1,234 artists who boosted this month</p>
              <p className="caption-1 text-muted-foreground">
                Average 3x increase in profile views within 7 days
              </p>
            </div>
          </BlurCard>
        </div>
      </div>
    </PageContainer>
  );
}
