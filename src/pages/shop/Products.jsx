import { useState } from "react";
import MoreArrowButton from "../../components/MoreArrowButton";
import { products } from "./../../utils/products";
import ProductCard from "./ProductCard";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategories, setSelectedCategories] = useState("Chair");
  const filteredProducts = products.filter(
    (products) => products.category === selectedCategories
  );
  const [visibleProducts, setVisibleProducts] = useState(4);
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };
  return (
    <section className="bg-[#F7F7F7]">
      <div className="section-container">
        <h1 className="text-4xl font-bold text-center my-8">{headline}</h1>

        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category) => (
              <button
                onClick={() => {
                  setSelectedCategories(category);
                  setVisibleProducts(4);
                }}
                key={category}
                className={`py-1.5 sm:px-5 px-4 rounded-full hover:bg-primary hover:text-white ${
                  selectedCategories === category ? "bg-white" : ""
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {visibleProducts < filteredProducts.length && (
          <div className="flex items-center justify-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="hover:bg-[#0D1B39] hover:text-white rounded-full px-5 py-2 flex items-center justify-center">
              <MoreArrowButton name="View All" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
