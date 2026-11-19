import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { INITIAL_ORDERS } from "./data/orders";
import { useCart } from "./hooks/useCart";
import { ROUTES, useRouter } from "./hooks/useRouter";
import { useWishlist } from "./hooks/useWishlist";

function App() {
  const { route, navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyWishlist, setOnlyWishlist] = useState(false);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const cart = useCart();
  const { likedIds, toggleLike } = useWishlist();

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    if (route !== ROUTES.HOME) {
      navigate(ROUTES.HOME);
    }
  };

  const handleClearSearch = () => setSearchQuery("");

  const handleHeaderWishlistClick = () => {
    if (route === ROUTES.HOME) {
      setOnlyWishlist((prev) => !prev);
    } else {
      setOnlyWishlist(true);
      navigate(ROUTES.HOME);
    }
  };

  const handlePlaceOrder = ({ customer, deliveryLabel, totalFormatted }) => {
    const nextNumber = 1025 + (orders.length - INITIAL_ORDERS.length);
    const itemsSummary = cart.items
      .map((item) => `${item.title} (${item.quantity}x)`)
      .join(", ");

    const newOrder = {
      id: `#${nextNumber}`,
      customer,
      itemsSummary,
      delivery: deliveryLabel,
      status: "Qabul qilindi",
      total: totalFormatted,
    };

    setOrders((prev) => [newOrder, ...prev]);
    cart.clearCart();
    return newOrder.id;
  };

  return (
    <div className="page-shell">
      <Header
        route={route}
        onNavigate={navigate}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        cartCount={cart.totalItems}
        wishlistCount={likedIds.length}
        onWishlistClick={handleHeaderWishlistClick}
      />

      <main className="container main-content">
        {route === ROUTES.HOME && (
          <HomePage
            searchQuery={searchQuery}
            onClearSearch={handleClearSearch}
            onlyWishlist={onlyWishlist}
            onToggleOnlyWishlist={() => setOnlyWishlist((prev) => !prev)}
            onResetWishlistFilter={() => setOnlyWishlist(false)}
            likedIds={likedIds}
            onToggleLike={toggleLike}
            onAddToCart={cart.addToCart}
            orders={orders}
          />
        )}

        {route === ROUTES.CART && (
          <CartPage
            items={cart.items}
            totalItems={cart.totalItems}
            onIncrease={cart.increaseQty}
            onDecrease={cart.decreaseQty}
            onRemove={cart.removeItem}
            onClearCart={cart.clearCart}
            onPlaceOrder={handlePlaceOrder}
            onBack={() => navigate(ROUTES.HOME)}
          />
        )}

        {route === ROUTES.LOGIN && (
          <LoginPage
            onBack={() => navigate(ROUTES.HOME)}
            onSwitchToRegister={() => navigate(ROUTES.REGISTER)}
          />
        )}

        {route === ROUTES.REGISTER && (
          <RegisterPage
            onBack={() => navigate(ROUTES.HOME)}
            onSwitchToLogin={() => navigate(ROUTES.LOGIN)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
