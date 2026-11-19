import { useCallback, useState } from "react";
import { PRODUCTS } from "../data/products";

const INITIAL_CART_ENTRIES = [
  { productId: 2, quantity: 1 },
  { productId: 3, quantity: 2 },
];

function createInitialCart() {
  return INITIAL_CART_ENTRIES.map(({ productId, quantity }) => {
    const product = PRODUCTS.find((item) => item.id === productId);
    return product ? { ...product, quantity } : null;
  }).filter(Boolean);
}

export function useCart() {
  const [items, setItems] = useState(createInitialCart);

  const addToCart = useCallback((product) => {
    if (product.stock <= 0) return;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        if (existing.quantity >= product.stock) return prev;
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const increaseQty = useCallback((id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }, []);

  const decreaseQty = useCallback((id) => {
    setItems((prev) =>
      prev.flatMap((item) => {
        if (item.id !== id) return [item];
        return item.quantity > 1
          ? [{ ...item, quantity: item.quantity - 1 }]
          : [];
      }),
    );
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    totalItems,
    addToCart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
  };
}
