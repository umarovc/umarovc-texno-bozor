import { useState } from "react";
import { useFormFields } from "../hooks/useFormFields";
import {
  DELIVERY_OPTIONS,
  PROMO_CODES,
  calculateCartTotals,
} from "../utils/cartHelpers";
import { formatPrice } from "../utils/formatPrice";

function CartSummary({ items, onPlaceOrder }) {
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState("SALE10");
  const [promoError, setPromoError] = useState("");
  const [delivery, setDelivery] = useState("courier");
  const [checkoutStatus, setCheckoutStatus] = useState(null);

  const { fields, handleChange, resetFields } = useFormFields({
    name: "",
    phone: "",
  });

  const totals = calculateCartTotals(items, {
    promoCode: appliedPromo,
    delivery,
  });

  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();

    if (!code) {
      setAppliedPromo("");
      setPromoError("");
      return;
    }

    if (PROMO_CODES[code]) {
      setAppliedPromo(code);
      setPromoError("");
    } else {
      setAppliedPromo("");
      setPromoError(`“${code}” promo kodi topilmadi`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (items.length === 0) return;

    if (!fields.name.trim() || !fields.phone.trim()) {
      setCheckoutStatus({
        type: "error",
        text: "Buyurtma berish uchun ism va telefon raqamingizni kiriting.",
      });
      return;
    }

    const orderId = onPlaceOrder({
      customer: fields.name.trim(),
      deliveryLabel: DELIVERY_OPTIONS[delivery].label,
      totalFormatted: formatPrice(totals.total),
    });

    resetFields();
    setCheckoutStatus({
      type: "success",
      text: `Buyurtmangiz (${orderId}) muvaffaqiyatli qabul qilindi!`,
    });
  };

  return (
    <aside className="cart-summary-card">
      <h2 className="cart-summary-title">Buyurtmani rasmiylashtirish</h2>

      <div className="promo-section">
        <div className="promo-row">
          <input
            type="text"
            className="promo-input"
            placeholder="Promo kod (masalan: SALE10)"
            aria-label="Promo kod"
            value={promoInput}
            onChange={(e) => setPromoInput(e.target.value)}
          />
          <button
            type="button"
            className="btn-promo"
            onClick={handleApplyPromo}
          >
            Qo‘llash
          </button>
        </div>

        {totals.promo && (
          <p className="promo-status">
            {appliedPromo} qo‘llandi — {totals.promo.label} chegirma
          </p>
        )}

        {promoError && (
          <p className="promo-status promo-status--error">{promoError}</p>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="checkout-form">
          <p className="checkout-heading">Buyurtma ma’lumotlari</p>

          <input
            type="text"
            name="name"
            className="form-field"
            placeholder="Ismingiz"
            aria-label="Ismingiz"
            value={fields.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            className="form-field"
            placeholder="+998 90 123 45 67"
            aria-label="Telefon raqamingiz"
            value={fields.phone}
            onChange={handleChange}
          />

          <div className="delivery-options">
            <button
              type="button"
              className={`delivery-chip ${delivery === "courier" ? "active" : ""}`}
              onClick={() => setDelivery("courier")}
            >
              Kuryer orqali
              <span>{formatPrice(DELIVERY_OPTIONS.courier.price)}</span>
            </button>
            <button
              type="button"
              className={`delivery-chip ${delivery === "pickup" ? "active" : ""}`}
              onClick={() => setDelivery("pickup")}
            >
              Olib ketish
              <span>Bepul</span>
            </button>
          </div>
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>Mahsulotlar</span>
            <span>{formatPrice(totals.subtotal)}</span>
          </div>

          {totals.promo && (
            <div className="summary-row summary-row--discount">
              <span>Chegirma ({totals.promo.label})</span>
              <span>− {formatPrice(totals.discount)}</span>
            </div>
          )}

          <div className="summary-row">
            <span>Yetkazib berish</span>
            <span>
              {totals.deliveryCost > 0
                ? formatPrice(totals.deliveryCost)
                : "Bepul"}
            </span>
          </div>

          <div className="summary-total">
            <span>Jami summa</span>
            <span>{formatPrice(totals.total)}</span>
          </div>
        </div>

        {checkoutStatus && (
          <p
            className={`checkout-message checkout-message--${checkoutStatus.type}`}
          >
            {checkoutStatus.text}
          </p>
        )}

        <button
          type="submit"
          className="btn-checkout"
          disabled={items.length === 0}
        >
          Buyurtma berish
        </button>
      </form>
    </aside>
  );
}

export default CartSummary;
