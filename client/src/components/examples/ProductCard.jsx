import ProductCard from '../ProductCard';
import productImage from '@assets/generated_images/Handwoven_wicker_basket_product_8bd3f966.png';

export default function ProductCardExample() {
  const product = {
    id: '1',
    name: 'Handwoven Wicker Basket',
    price: 45.99,
    image: productImage,
    category: 'Home Decor'
  };

  return (
    <div className="w-80">
      <ProductCard product={product} onAddToCart={(p) => console.log('Added:', p)} />
    </div>
  );
}
