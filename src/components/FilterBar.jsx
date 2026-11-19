import { CloseIcon, HeartIcon } from "./Icons";
import { CATEGORIES } from "../utils/filterProducts";

function FilterBar({
  category,
  onCategoryChange,
  onlyWishlist,
  onToggleOnlyWishlist,
  sortBy,
  onSortChange,
  searchQuery,
  onClearSearch,
  resultsCount,
}) {
  return (
    <section className="filter-bar" aria-label="Mahsulotlarni saralash">
      <div className="filter-categories">
        {CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            className={`filter-tab ${category === item ? "active" : ""}`}
            aria-pressed={category === item}
            onClick={() => onCategoryChange(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="filter-controls">
        {searchQuery && (
          <button
            type="button"
            className="search-chip"
            onClick={onClearSearch}
            aria-label="Qidiruvni tozalash"
          >
            <span>Qidiruv: &ldquo;{searchQuery}&rdquo;</span>
            <CloseIcon />
          </button>
        )}

        <button
          type="button"
          className={`wishlist-toggle ${onlyWishlist ? "active" : ""}`}
          aria-pressed={onlyWishlist}
          onClick={onToggleOnlyWishlist}
        >
          <HeartIcon filled={onlyWishlist} />
          <span>Faqat sevimlilar</span>
        </button>

        <select
          className="sort-select"
          aria-label="Mahsulotlarni saralash"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="default">Saralash: Standart</option>
          <option value="price-asc">Narx: Arzondan qimmatga</option>
          <option value="price-desc">Narx: Qimmatdan arzonga</option>
        </select>

        <span className="results-count">{resultsCount} ta mahsulot</span>
      </div>
    </section>
  );
}

export default FilterBar;
