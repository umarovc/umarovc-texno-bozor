import ProductCard from "./ProductCard";

function ProductGrid({ products, likedIds, onToggleLike, onAddToCart }) {
  return (
    <section className="product-grid" aria-label="Mahsulotlar katalogi">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isLiked={likedIds.includes(product.id)}
          onToggleLike={onToggleLike}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}

export default ProductGrid;
