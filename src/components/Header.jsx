import { CartIcon, HeartIcon, SearchIcon, UserIcon } from "./Icons";
import { ROUTES } from "../hooks/useRouter";

function Header({
  route,
  onNavigate,
  searchQuery,
  onSearchChange,
  cartCount,
  wishlistCount,
  onWishlistClick,
}) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <button
          type="button"
          className="brand"
          onClick={() => onNavigate(ROUTES.HOME)}
        >
          <div className="brand-mark">TB</div>
          <div>
            <p className="brand-title">TexnoBozor</p>
            <p className="brand-subtitle">Zamonaviy texnika do‘koni</p>
          </div>
        </button>

        <div className="header-search">
          <span className="header-search-icon">
            <SearchIcon />
          </span>
          <input
            type="text"
            className="header-search-input"
            placeholder="Mahsulot nomi bo‘yicha qidirish..."
            aria-label="Mahsulot nomi bo‘yicha qidirish"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="header-actions">
          <button
            type="button"
            className="header-pill"
            onClick={onWishlistClick}
          >
            <HeartIcon filled />
            <span>Sevimlilar</span>
            <span className="pill-count">{wishlistCount}</span>
          </button>

          <button
            type="button"
            className="header-pill header-pill--dark"
            aria-current={route === ROUTES.CART ? "page" : undefined}
            onClick={() => onNavigate(ROUTES.CART)}
          >
            <CartIcon />
            <span>Savat</span>
            <span className="pill-count">{cartCount}</span>
          </button>

          <div className="header-divider" aria-hidden="true" />

          <button
            type="button"
            className="header-pill"
            aria-current={route === ROUTES.LOGIN ? "page" : undefined}
            onClick={() => onNavigate(ROUTES.LOGIN)}
          >
            <UserIcon />
            <span>Kirish</span>
          </button>

          <button
            type="button"
            className="header-pill header-pill--brand"
            aria-current={route === ROUTES.REGISTER ? "page" : undefined}
            onClick={() => onNavigate(ROUTES.REGISTER)}
          >
            <span>Ro‘yxatdan o‘tish</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
