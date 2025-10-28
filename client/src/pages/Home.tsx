import Hero from "@/components/Hero";
import ProductCard, { type Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from '@assets/generated_images/Artisan_crafting_pottery_hero_e2a8d6f3.png';
import basketImage from '@assets/generated_images/Handwoven_wicker_basket_product_8bd3f966.png';
import bowlImage from '@assets/generated_images/Ceramic_pottery_bowl_product_792c4d26.png';
import macrameImage from '@assets/generated_images/Macrame_wall_hanging_product_82a169ff.png';
import trayImage from '@assets/generated_images/Wooden_serving_tray_product_8ab8cf90.png';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

export default function Home({ onAddToCart }: HomeProps) {
  //todo: remove mock functionality
  const featuredProducts: Product[] = [
    { id: '1', name: 'Handwoven Wicker Basket', price: 45.99, image: basketImage, category: 'Home Decor' },
    { id: '2', name: 'Ceramic Pottery Bowl', price: 32.50, image: bowlImage, category: 'Tableware' },
    { id: '3', name: 'Macrame Wall Hanging', price: 58.00, image: macrameImage, category: 'Wall Art' },
    { id: '4', name: 'Wooden Serving Tray', price: 67.50, image: trayImage, category: 'Kitchen' },
  ];

  return (
    <div>
      <Hero imageUrl={heroImage} />

      <section className="py-20 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" data-testid="text-featured-title">
            Featured Handicrafts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece is lovingly crafted by hand, making every item truly unique
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop">
            <Button size="lg" variant="outline" data-testid="button-view-all">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6" data-testid="text-story-title">
                Crafted with Passion
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every piece in our collection tells a story of dedication, skill, and artistry. 
                Our artisans pour their hearts into each creation, using time-honored techniques 
                passed down through generations.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When you purchase from us, you're not just buying a product—you're supporting 
                independent creators and preserving traditional crafts for future generations.
              </p>
              <Link href="/shop">
                <Button size="lg" data-testid="button-discover-more">
                  Discover More
                </Button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Artisan at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
