import category1 from "../../Assets/productImage/b1.jpg";
import category2 from "../../Assets/productImage/b2.webp";
import category3 from "../../Assets/productImage/b3.webp";
import category4 from "../../Assets/productImage/b4.jpg";

import ShopProduct from "@/Components/ShopProduct";
// React Icons

import { BsFillGridFill, BsGrid1X2Fill } from "react-icons/bs";
const page = () => {
  return (
    <div className="px-6 md:px-24 py-28 bg-gray-100">
      <h1 className="text-center text-4xl text-green-500 font-semibold my-10">
        Buy Recycle Plastice and Papers
      </h1>
      <div className="h-full w-full ">
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <h6 className="text-gray-400 font-semibold">Short by :</h6>
            <select
              name=""
              id=""
              className="p-3 border rounded outline-none cursor-pointer"
            >
              <option value="">Name</option>
              <option value="">High price to Low price</option>
              <option value="">Low price to High price</option>
              <option value="">New Product</option>
            </select>
          </div>

          <div className="flex space-x-4 items-center opacity-0 md:opacity-100">
            <h6 className="text-gray-400 font-bold">View :</h6>
            <BsFillGridFill className="text-4xl border border-black rounded p-1 cursor-pointer hover:bg-orange-400 " />
            <BsGrid1X2Fill className="text-4xl border border-black rounded p-1 cursor-pointer hover:bg-orange-400" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 m-10">
          <ShopProduct
            productImage={category3}
            title="Bottole With Polythine"
            price="৳ 13.20"
            discountPrice="৳ 18.02"
          />

          <ShopProduct
            productImage={category1}
            title="Fresh Bottole"
            price="৳ 15.20"
            discountPrice="৳ 20.20"
          />
          <ShopProduct
            productImage={category2}
            title="Mixed color cap"
            price="৳ 12.20"
            discountPrice="৳ 16.11"
          />

          <ShopProduct
            productImage={category4}
            title="Blue Color Cap"
            price="৳ 10.20"
            discountPrice="৳ 12.55"
          />

          <ShopProduct
            productImage={category4}
            title="Blue Color Cap"
            price="৳ 10.20"
            discountPrice="৳ 12.55"
          />
          <ShopProduct
            productImage={category1}
            title="Fresh Bottole"
            price="৳ 15.20"
            discountPrice="৳ 20.20"
          />
          <ShopProduct
            productImage={category2}
            title="Mixed color cap"
            price="৳ 12.20"
            discountPrice="৳ 16.11"
          />
          <ShopProduct
            productImage={category3}
            title="Bottole With Polythine"
            price="৳ 13.20"
            discountPrice="৳ 18.02"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
