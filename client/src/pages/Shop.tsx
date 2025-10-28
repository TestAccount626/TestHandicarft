import ProductCard, { type Product } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import basketImage from '@assets/generated_images/Handwoven_wicker_basket_product_8bd3f966.png';
import bowlImage from '@assets/generated_images/Ceramic_pottery_bowl_product_792c4d26.png';
import macrameImage from '@assets/generated_images/Macrame_wall_hanging_product_82a169ff.png';
import trayImage from '@assets/generated_images/Wooden_serving_tray_product_8ab8cf90.png';
import journalImage from '@assets/generated_images/Leather_journal_product_54ece468.png';
import blanketImage from '@assets/generated_images/Knitted_wool_blanket_product_aebfc7a4.png';
import necklaceImage from '@assets/generated_images/Beaded_jewelry_necklace_product_5beea405.png';

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export default function Shop({ onAddToCart }: ShopProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  //todo: remove mock functionality
  const allProducts: Product[] = [
    { id: '1', name: 'Handwoven Wicker Basket', price: 45.99, image: basketImage, category: 'Home Decor' },
    { id: '2', name: 'Ceramic Pottery Bowl', price: 32.50, image: bowlImage, category: 'Tableware' },
    { id: '3', name: 'Macrame Wall Hanging', price: 58.00, image: macrameImage, category: 'Wall Art' },
    { id: '4', name: 'Wooden Serving Tray', price: 67.50, image: trayImage, category: 'Kitchen' },
    { id: '5', name: 'Handcrafted Leather Journal', price: 42.00, image: journalImage, category: 'Stationery' },
    { id: '6', name: 'Knitted Wool Blanket', price: 89.99, image: blanketImage, category: 'Textiles' },
    { id: '7', name: 'Beaded Jewelry Necklace', price: 36.50, image: necklaceImage, category: 'Jewelry' },
    { id: '8', name: 'Artisan Ceramic Mug', price: 28.00, image: bowlImage, category: 'Tableware' },
  ];

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <div className="bg-muted py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-shop-title">
            Our Collection
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Browse our curated selection of handcrafted treasures
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-products"
            />
          </div>

          <div className="flex gap-2 items-center w-full sm:w-auto">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48" data-testid="select-sort">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon" data-testid="button-filters">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mb-4 text-sm text-muted-foreground" data-testid="text-results-count">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground mb-4">No products found</p>
            <Button onClick={() => setSearchQuery("")} variant="outline" data-testid="button-clear-search">
              Clear Search
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
