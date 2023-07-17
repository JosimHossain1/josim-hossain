import Image from "next/image";
import logo from "../Assets/Logo.png";
import paper from "../Assets/service/paper.png";
import plastic from "../Assets/service/plastic.png";

const Service = () => {
  return (
    <div className=" px-4 md:px-24 mx-auto sm:max-w-xl md:max-w-screen-xl lg:px-8 text-center pt-10 pb-20">
      {/*Title  */}
      <div className=" flex flex-col items-center">
        <a href="/">
          <Image
            src={logo}
            className="mr-3 h-12 w-12"
            alt="Green Hawker Logo"
          />
        </a>
        <h3 className="text-[#209C5E] font-semibold text-2xl">OUR SERVICES</h3>
      </div>

      {/* Service area */}
      <div className="md:flex space-y-8 md:space-y-0 md:space-x-8 mt-10">
        <div className="flex-1 p-4 rounded flex flex-col items-center shadow-xl border-2 border-green-600">
          <Image
            src={plastic}
            className="mr-3 h-12 w-12"
            alt="Green Hawker Logo"
          />
          <h4 className="text-[#209C5E] font-bold my-4 text-xl poppins">
            Plastic E-waste Collection
          </h4>
          <p className="text-gray-400 ">
            We are offering a great deal for you to sell your plastic based
            waste. Only you have to register then our green hawkers will collect
            your plastic based wastes.
          </p>
        </div>
        <div className="flex-1 p-4 rounded flex flex-col items-center shadow-xl border-2 border-green-600">
          <Image
            src={paper}
            className="mr-3 h-12 w-12"
            alt="Green Hawker Logo"
          />
          <h4 className="text-[#209C5E] font-bold my-4 text-xl poppins">
            Paper E-waste Collection
          </h4>
          <p className="text-gray-400">
            We are offering a great deal for you to sell your paper based waste.
            Only you have to register then our green hawkers will collect your
            paper based wastes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
