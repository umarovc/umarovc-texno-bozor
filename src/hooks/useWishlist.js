import { useCallback, useState } from "react";
import { PRODUCTS } from "../data/products";

const INITIAL_LIKED_IDS = PRODUCTS.filter((item) => item.liked).map(
  (item) => item.id,
);

export function useWishlist() {
  const [likedIds, setLikedIds] = useState(INITIAL_LIKED_IDS);

  const toggleLike = useCallback((id) => {
    setLikedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  }, []);

  return { likedIds, toggleLike };
}
