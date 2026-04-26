import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

export default function CheckoutOrderSummary() {
  const { items, subtotal, shipping, total } = useCart();

  return (
    <div className="bg-light p-30 mb-5">
      <div className="border-bottom">
        <h6 className="mb-3">Products</h6>
        {items.map(({ id, title, price, quantity }) => (
          <div key={id} className="d-flex justify-content-between">
            <p>{title}</p>
            <p>{formatPrice(price * quantity)}</p>
          </div>
        ))}
      </div>
      <div className="border-bottom pt-3 pb-2">
        <div className="d-flex justify-content-between mb-3">
          <h6>Subtotal</h6>
          <h6>{formatPrice(subtotal)}</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6 className="font-weight-medium">Shipping</h6>
          <h6 className="font-weight-medium">{formatPrice(shipping)}</h6>
        </div>
      </div>
      <div className="pt-2">
        <div className="d-flex justify-content-between mt-2">
          <h5>Total</h5>
          <h5>{formatPrice(total)}</h5>
        </div>
      </div>
    </div>
  );
}
