import { Link } from "react-router";
import { useCart } from "../../hooks/useCart";
import { resetCart } from "../../store/cart";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";

export default function CheckoutOrderSummary({ actionData }) {
  const { items, subtotal, shipping, total } = useCart();
  const dispatch = useDispatch();

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
      <div
        id="success"
        className={
          actionData && actionData.error
            ? "alert alert-danger"
            : actionData
              ? "alert alert-success"
              : undefined
        }
      >
        {actionData && actionData.error && (
          <>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-hidden="true"
            >
              &times;
            </button>
            <strong>{actionData.error}</strong>
          </>
        )}
        {actionData && actionData.name && (
          <>
            <Link
              to="/"
              type="button"
              class="close"
              data-dismiss="alert"
              aria-hidden="true"
              onClick={() => dispatch(resetCart())}
            >
              &times;
            </Link>
            <strong>
              Order posted to database! Close to return to home page.
            </strong>
          </>
        )}
      </div>
    </div>
  );
}
