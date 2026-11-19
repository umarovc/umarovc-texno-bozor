import { DeviceIcon, TrashIcon } from "./Icons";
import { formatPrice } from "../utils/formatPrice";

function CartItemCard({ item, onIncrease, onDecrease, onRemove }) {
  const reachedStockLimit = item.quantity >= item.stock;

  return (
    <li className="cart-page-item">
      <div className="cart-item-thumb">
        <DeviceIcon type={item.icon} />
      </div>

      <div className="cart-page-item-info">
        <span className="product-category">{item.category}</span>
        <p className="cart-page-item-name">{item.title}</p>
        <p className="cart-page-item-specs">{item.specs}</p>
        <p className="cart-page-item-unit">
          1 dona narxi: {formatPrice(item.price)}
        </p>
      </div>

      <div className="cart-page-item-controls">
        <div className="qty-stepper">
          <button
            type="button"
            className="qty-btn"
            aria-label={`${item.title} sonini kamaytirish`}
            onClick={() => onDecrease(item.id)}
          >
            −
          </button>
          <span className="qty-value">{item.quantity}</span>
          <button
            type="button"
            className="qty-btn"
            aria-label={`${item.title} sonini oshirish`}
            disabled={reachedStockLimit}
            onClick={() => onIncrease(item.id)}
          >
            +
          </button>
        </div>

        <span className="cart-page-item-subtotal">
          {formatPrice(item.price * item.quantity)}
        </span>

        <button
          type="button"
          className="btn-remove-item"
          aria-label={`${item.title} mahsulotini o‘chirish`}
          onClick={() => onRemove(item.id)}
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  );
}

export default CartItemCard;
