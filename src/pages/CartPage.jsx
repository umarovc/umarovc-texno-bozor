import CartItemCard from "../components/CartItemCard";
import CartSummary from "../components/CartSummary";
import { ArrowLeftIcon, CartIcon } from "../components/Icons";

function CartPage({
  items,
  totalItems,
  onIncrease,
  onDecrease,
  onRemove,
  onClearCart,
  onPlaceOrder,
  onBack,
}) {
  return (
    <section className="cart-page-section" aria-label="Savat sahifasi">
      <div className="cart-page-top">
        <div>
          <span className="auth-badge">Savat</span>
          <h1 className="cart-page-title">Savatingiz</h1>
          <p className="cart-page-subtitle">
            {totalItems > 0
              ? `${totalItems} ta mahsulot tanlangan — buyurtmani rasmiylashtiring`
              : "Savatingiz hozircha bo‘sh — do‘kondan mahsulot qo‘shing"}
          </p>
        </div>

        <button type="button" className="auth-back-btn" onClick={onBack}>
          <ArrowLeftIcon />
          <span>Do‘konga qaytish</span>
        </button>
      </div>

      <div className="cart-page-grid">
        <div className="cart-items-card">
          <div className="cart-header">
            <h2 className="cart-title">
              <CartIcon />
              <span>Tanlangan mahsulotlar ({totalItems})</span>
            </h2>
            {items.length > 0 && (
              <button
                type="button"
                className="btn-clear"
                onClick={onClearCart}
              >
                Savatni tozalash
              </button>
            )}
          </div>

          {items.length > 0 ? (
            <ul className="cart-page-list">
              {items.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  onRemove={onRemove}
                />
              ))}
            </ul>
          ) : (
            <div className="cart-empty">
              <div className="empty-state-icon">
                <CartIcon />
              </div>
              <h3 className="empty-state-title">Savat bo‘sh</h3>
              <p className="empty-state-desc">
                Hali birorta ham mahsulot tanlanmagan. Katalogga qaytib kerakli
                texnikani savatga qo‘shing.
              </p>
              <button
                type="button"
                className="empty-state-btn"
                onClick={onBack}
              >
                Do‘konga qaytish
              </button>
            </div>
          )}
        </div>

        <CartSummary items={items} onPlaceOrder={onPlaceOrder} />
      </div>
    </section>
  );
}

export default CartPage;
