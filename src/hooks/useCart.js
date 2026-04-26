import { useSelector } from "react-redux";

export function useCart() {
  // Pull from redux store and calculate derived values
  const items = useSelector((state) => state.cart.items);

  const numItems = items.length;
  const subtotal = items.reduce(
    (total, current) => total + current.price * current.quantity,
    0,
  );
  const shipping = subtotal * 0.1;
  const total = subtotal + shipping;

  return {
    items,
    numItems,
    subtotal,
    shipping,
    total,
  };
}
