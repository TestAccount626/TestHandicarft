import CartDrawer from '../CartDrawer';
import { useState } from 'react';
import basketImage from '@assets/generated_images/Handwoven_wicker_basket_product_8bd3f966.png';
import bowlImage from '@assets/generated_images/Ceramic_pottery_bowl_product_792c4d26.png';

export default function CartDrawerExample() {
  const [open, setOpen] = useState(true);
  const [items, setItems] = useState([
    { id: '1', name: 'Handwoven Wicker Basket', price: 45.99, quantity: 2, image: basketImage },
    { id: '2', name: 'Ceramic Pottery Bowl', price: 32.50, quantity: 1, image: bowlImage }
  ]);

  return (
    <CartDrawer
      open={open}
      onClose={() => setOpen(!open)}
      items={items}
      onUpdateQuantity={(id, quantity) => {
        setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
      }}
      onRemoveItem={(id) => {
        setItems(items.filter(item => item.id !== id));
      }}
    />
  );
}
