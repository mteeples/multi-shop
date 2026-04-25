export default function ProductsSidebar({ brands, filterProducts }) {
  return (
    <div className="col-lg-3 col-md-4">
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by brand</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <form>
          {brands
            .sort((a, b) => a.brand > b.brand)
            .map(({ brand, numItems, filterActive }, index) => {
              return (
                <div
                  key={brand || "null"}
                  className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
                >
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={brand}
                    onChange={(e) => console.log(e.target.checked)}
                    onChange={filterProducts}
                    checked={filterActive}
                  />
                  <label className="custom-control-label" htmlFor={brand}>
                    {brand}
                  </label>
                  <span className="badge border font-weight-normal">
                    {numItems}
                  </span>{" "}
                </div>
              );
            })}
        </form>
      </div>
    </div>
  );
}
