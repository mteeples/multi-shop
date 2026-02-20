import { formatPrice } from "../../utils/formatPrice";

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
          <a
            className="h6 text-decoration-none text-truncate"
            href={`/products/${productId}`}
          >
            {title}
          </a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>{formatPrice(price)}</h5>
            <h6 className="text-muted ml-2">
              <del>{getFullPrice(price, discountPercentage)}</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small>(99)</small>
          </div>
        </div>
      </div>
    </div>
  );
}
