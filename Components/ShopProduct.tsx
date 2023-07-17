import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
const ShopProduct = (props: any) => {
  const { productImage, title, discountPrice, price } = props;
  return (
    <div>
      <div className="cart bg-white w-[250px] rounded hover:shadow-xl border transition-all hover:-mt-1 relative overflow-hidden">
        <span className="text-left text-[12px] bg-green-500 rounded-r p-[6px] text-white absolute">
          10% off
        </span>
        <Image
          src={productImage}
          alt={title}
          className="mx-auto h-[200px] object-cover"
        />
        <div className="px-4">
          <p>{title}</p>
          <h6 className="font-semibold">
            {discountPrice}
            <span className="line-through text-[14px] text-gray-400 ml-3">
              {price}
            </span>
          </h6>
          <div className="flex my-4">
            <StarIcon className="w-3 text-yellow-600" />
            <StarIcon className="w-3 text-yellow-600" />
            <StarIcon className="w-3 text-yellow-600" />
            <StarIcon className="w-3 text-yellow-600" />
            <StarIcon className="w-3 text-yellow-600" />
          </div>
        </div>

        <button className="bg-green-500 w-full text-white p-2 font-bold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ShopProduct;
