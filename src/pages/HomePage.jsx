import { useState } from "react";
import FilterBar from "../components/FilterBar";
import ProductGrid from "../components/ProductGrid";
import EmptyState from "../components/EmptyState";
import OrdersSection from "../components/OrdersSection";
import { PRODUCTS } from "../data/products";
import { filterProducts } from "../utils/filterProducts";

function HomePage({
  searchQuery,
  onClearSearch,
  onlyWishlist,
  onToggleOnlyWishlist,
  onResetWishlistFilter,
  likedIds,
  onToggleLike,
  onAddToCart,
  orders,
}) {
  const [category, setCategory] = useState("Hammasi");
  const [sortBy, setSortBy] = useState("default");

  const trimmedQuery = searchQuery.trim();
  const filteredProducts = filterProducts(PRODUCTS, {
    searchQuery,
    category,
    onlyWishlist,
    likedIds,
    sortBy,
  });

  const handleResetFilters = () => {
    onClearSearch();
    setCategory("Hammasi");
    onResetWishlistFilter();
  };

  return (
    <>
      <FilterBar
        category={category}
        onCategoryChange={setCategory}
        onlyWishlist={onlyWishlist}
        onToggleOnlyWishlist={onToggleOnlyWishlist}
        sortBy={sortBy}
        onSortChange={setSortBy}
        searchQuery={trimmedQuery}
        onClearSearch={onClearSearch}
        resultsCount={filteredProducts.length}
      />

      {filteredProducts.length > 0 ? (
        <ProductGrid
          products={filteredProducts}
          likedIds={likedIds}
          onToggleLike={onToggleLike}
          onAddToCart={onAddToCart}
        />
      ) : (
        <EmptyState
          searchQuery={trimmedQuery}
          onClearSearch={handleResetFilters}
        />
      )}

      <OrdersSection orders={orders} />
    </>
  );
}

export default HomePage;
