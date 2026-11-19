function OrderCard({ order }) {
  return (
    <article className="order-card">
      <div className="order-top">
        <span className="order-id">
          {order.id} — {order.customer}
        </span>
        <span className="order-status">{order.status}</span>
      </div>

      <p className="order-meta">{order.itemsSummary}</p>

      <div className="order-bottom">
        <span className="order-delivery">{order.delivery}</span>
        <span className="order-total">{order.total}</span>
      </div>
    </article>
  );
}

export default OrderCard;
