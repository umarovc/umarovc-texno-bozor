export const DELIVERY_OPTIONS = {
  courier: { label: "Kuryer orqali", price: 30000 },
  pickup: { label: "Do‘kondan olib ketish", price: 0 },
};

export const PROMO_CODES = {
  SALE10: { rate: 0.1, label: "10%" },
};

export function calculateCartTotals(items, { promoCode = "", delivery = "courier" }) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const promo = PROMO_CODES[promoCode] || null;
  const discount = promo ? Math.round(subtotal * promo.rate) : 0;
  const deliveryCost = items.length > 0 ? (DELIVERY_OPTIONS[delivery]?.price ?? 0) : 0;
  const total = subtotal - discount + deliveryCost;

  return {
    totalItems,
    subtotal,
    promo,
    discount,
    deliveryCost,
    total,
  };
}
