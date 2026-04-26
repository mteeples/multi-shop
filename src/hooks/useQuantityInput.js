import { useState } from "react";

export function useQuantityInput(initialQty) {
  const [quantity, setQuantity] = useState(initialQty);

  function incrementQty() {
    setQuantity((qty) => qty + 1);
  }

  function decrementQty() {
    setQuantity((qty) => (qty === 1 ? 1 : qty - 1));
  }

  return {
    quantity,
    incrementQty,
    decrementQty,
  };
}
