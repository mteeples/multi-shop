import { useQuantityInput } from "../../hooks/useQuantityInput";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";
import { updateItemQuantity, removeItem } from "../../store/cart";

export default function CartItem({ id, price, quantity, title, thumbnail }) {
  // Calculate derived field
  const subtotal = quantity * price;

  // Update the store with the buttons
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeItem({ itemId: id }));
  const handleMinus = () =>
    dispatch(updateItemQuantity({ itemId: id, newQuantity: quantity - 1 }));
  const handlePlus = () =>
    dispatch(updateItemQuantity({ itemId: id, newQuantity: quantity + 1 }));

  return (
    <tr>
      <td className="align-middle">
        <img src={thumbnail} alt="" style={{ width: "50px" }} /> {title}
      </td>
      <td className="align-middle">{formatPrice(price)}</td>
      <td className="align-middle">
        <div
          className="input-group quantity mx-auto"
          style={{ width: "100px" }}
        >
          <div className="input-group-btn">
            <button
              onClick={handleMinus}
              className="btn btn-sm btn-primary btn-minus"
            >
              <i className="fa fa-minus"></i>
            </button>
          </div>
          <input
            type="text"
            className="form-control form-control-sm bg-secondary border-0 text-center"
            value={quantity}
            readOnly
          />
          <div className="input-group-btn">
            <button
              onClick={handlePlus}
              className="btn btn-sm btn-primary btn-plus"
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </td>
      <td className="align-middle">{formatPrice(subtotal)}</td>
      <td className="align-middle">
        <button onClick={handleDelete} className="btn btn-sm btn-danger">
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
}
