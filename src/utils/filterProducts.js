import { searchProducts } from "./searchProducts";

export const CATEGORIES = ["Hammasi", "Noutbuklar", "Audio", "Aksessuarlar"];

export function filterProducts(
  products,
  { searchQuery, category, onlyWishlist, likedIds, sortBy },
) {
  let result = searchProducts(products, searchQuery);

  if (category !== "Hammasi") {
    result = result.filter((item) => item.category === category);
  }

  if (onlyWishlist) {
    result = result.filter((item) => likedIds.includes(item.id));
  }

  if (sortBy === "price-asc") {
    return [...result].sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-desc") {
    return [...result].sort((a, b) => b.price - a.price);
  }

  return result;
}
