import { useState } from "react";
import { useProducts } from "./useProducts";

export function useFilteredProducts(categoryName) {
  // Get all products to derive unique brands
  const { getProductsByCategory } = useProducts();
  const allProducts = getProductsByCategory(categoryName);

  // Derive unique brands and use it to create filter state
  const allBrands = allProducts.map((prod) => prod.brand);
  const uniqueBrands = [...new Set(allBrands)].sort();
  const [activeFilters, setActiveFilters] = useState(uniqueBrands);

  // Function to update filters based on checkboxes
  function filterProducts(e) {
    const key = e.target.id;
    const val = e.target.checked;

    if (key === "All Brands") {
      setActiveFilters(val ? uniqueBrands : []);
    } else if (val) {
      setActiveFilters((oldKeys) => [...oldKeys, key]);
    } else {
      setActiveFilters((oldKeys) => oldKeys.filter((b) => b !== key));
    }
  }

  // Calculate product counts
  const brandsAndCounts = uniqueBrands.map((brand) => {
    return {
      brand,
      numItems: allProducts.filter((prod) => brand === prod.brand).length,
      filterActive: activeFilters.includes(brand),
    };
  });
  const brands = [
    {
      brand: "All Brands",
      numItems: allProducts.length,
      filterActive: activeFilters.length === uniqueBrands.length,
    },
    ...brandsAndCounts,
  ];

  // Filter products based on active filters
  const products = allProducts.filter(({ brand }) =>
    activeFilters.includes(brand),
  );

  return {
    brands,
    products,
    filterProducts,
  };
}
