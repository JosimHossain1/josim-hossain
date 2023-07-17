import Image from "next/image";

const ProductCart = (props: any) => {
  const { productImage, title } = props;
  return (
    <div>
      <div className="cart  bg-gray-100 rounded flex flex-col items-center justify-center hover:shadow-xl border transition-all hover:-mt-1">
        <Image src={productImage} alt={title} className="w-full" />
        <p className="mt-4">{title}</p>
      </div>
    </div>
  );
};

export default ProductCart;
