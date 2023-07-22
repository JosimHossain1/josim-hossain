import Image from "next/image";
import paper from "../Assets/service/paper.png";
import plastic from "../Assets/service/plastic.png";
import Bar from "./shared/Bar";

const Service = () => {
  return (
    <div className=" px-4 md:px-24 mx-auto sm:max-w-xl md:max-w-screen-xl lg:px-8 text-center pt-10 pb-20">
      {/*Title  */}

      <h3 className="font-semibold text-4xl mb-2">SERVICES</h3>
      <p className="text-sm text-gray-400">
        I&apos;m passionate and dedicated to making the world of
        <br /> intent easy and affordable for everyone.
        <Bar />
      </p>

      {/* Service area */}
      <div className="md:flex space-y-8 md:space-y-0 md:space-x-8 mt-10">
        <div className="flex-1 p-4 rounded flex flex-col items-center shadow-xl border-2 border-green-600">
          <Image
            src={plastic}
            className="mr-3 h-12 w-12"
            alt="Green Hawker Logo"
          />
          <h4 className="primary-color font-bold my-4 text-xl poppins">
            Develop Website Front-End
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
