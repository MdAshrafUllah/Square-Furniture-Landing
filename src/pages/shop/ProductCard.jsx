import { FiPlus } from "react-icons/fi";
import Rating from "../../components/rating";
import { getImageURL } from "../../utils/getImageUrl";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="bg-[#FAFAFA]">
        <img src={getImageURL(`${product.imageUrl}`)} alt="" />
      </div>
      {/* TODO: Add dark mode. */}
      <div className="p-6 bg-white shadow-sm rounded-b-3xl">
        <h4 className="text-base mb-1">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className="mt-5 flex justify-between items-center">
          <p className="text-[#0D1B39] font-bold text-lg">
            <sup>$</sup>
            <span>{product.price}</span>
          </p>
          <button className="bg-[#0D1B39] text-white p-3 text-3xl rounded-full hover:bg-yellow-500">
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
