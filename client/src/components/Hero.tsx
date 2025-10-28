import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

export default function Hero({
  title = "Handcrafted with Love",
  subtitle = "Discover unique, artisan-made treasures crafted by skilled hands",
  imageUrl,
}: HeroProps) {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : "linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--accent)) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6" data-testid="text-hero-title">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/shop">
            <Button
              size="lg"
              variant="default"
              className="text-lg px-8"
              data-testid="button-shop-now"
            >
              Shop Now
            </Button>
          </Link>
          <Link href="/shop">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-background/30"
              data-testid="button-browse-collection"
            >
              Browse Collection
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-white/80 text-sm">
          <span data-testid="text-badge-handmade">✦ Handmade</span>
          <span data-testid="text-badge-sustainable">✦ Sustainable</span>
          <span data-testid="text-badge-artisans">✦ Direct from Artisans</span>
        </div>
      </div>
    </section>
  );
}
