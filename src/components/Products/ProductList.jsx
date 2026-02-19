import ProductTile from "./ProductTile";

export default function ProductList({ products, productClass, ...props }) {
  return (
    <div {...props}>
      {products.map((product) => {
        return (
          <ProductTile
            key={product.title}
            product={product}
            className={productClass}
          />
        );
      })}
    </div>
  );
}
