import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Card className="group overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-product-${product.id}`}>
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-product-${product.id}`}
        />
        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm ${
            isWishlisted ? "text-destructive" : ""
          }`}
          onClick={() => {
            setIsWishlisted(!isWishlisted);
            console.log(`Wishlist toggled for ${product.name}`);
          }}
          data-testid={`button-wishlist-${product.id}`}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>
      </div>

      <div className="p-4">
        <h3 className="font-serif text-xl font-medium mb-2 line-clamp-2" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>
        {product.category && (
          <p className="text-sm text-muted-foreground mb-2" data-testid={`text-category-${product.id}`}>
            {product.category}
          </p>
        )}
        <div className="flex items-center justify-between gap-2">
          <p className="text-2xl font-semibold text-primary" data-testid={`text-price-${product.id}`}>
            ${product.price.toFixed(2)}
          </p>
          <Button
            size="sm"
            className="gap-2"
            onClick={() => {
              onAddToCart?.(product);
              console.log(`Added to cart: ${product.name}`);
            }}
            data-testid={`button-add-to-cart-${product.id}`}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
