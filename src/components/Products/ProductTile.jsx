import { Link } from "react-router";
import { formatPrice } from "../../utils/formatPrice";
import StarRating from "../Reviews/StarRating";
import { calculateAvgRating } from "../../utils/calculateAvgRating";

function getFullPrice(price, discountPercentage) {
  const fullPrice = price / (1 - discountPercentage / 100);
  return formatPrice(fullPrice);
}

export default function ProductTile({ product, ...props }) {
  const {
    title,
    price,
    discountPercentage,
    thumbnail,
    reviews,
    id: productId,
  } = product;
  return (
    <div {...props}>
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={thumbnail} alt={title} />
          <div className="product-action">
            <a className="btn btn-outline-dark btn-square" href="/">
              <i className="fa fa-shopping-cart"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" href="/">
              <i className="far fa-heart"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" href="/">
              <i className="fa fa-sync-alt"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" href="/">
              <i className="fa fa-search"></i>
            </a>
          </div>
        </div>
        <div className="text-center py-4">
          <Link
            className="h6 text-decoration-none text-truncate"
            to={`/products/${productId}`}
          >
            {title}
          </Link>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>{formatPrice(price)}</h5>
            <h6 className="text-muted ml-2">
              <del>{getFullPrice(price, discountPercentage)}</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <StarRating
              rating={calculateAvgRating(reviews)}
              baseClass="text-primary mr-1"
            />
            <small>({reviews.length})</small>
          </div>
        </div>
      </div>
    </div>
  );
}
