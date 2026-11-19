export function searchProducts(products, query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return products;

  return products.filter(({ title, category, specs }) =>
    `${title} ${category} ${specs}`.toLowerCase().includes(normalized),
  );
}
