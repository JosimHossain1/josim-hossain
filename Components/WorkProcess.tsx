import Image from "next/image";
import logo from "../Assets/Logo.png";
import line from "../Assets/line.png";
import line2 from "../Assets/line2.png";
import WorkProcessCard from "./WorkProcessCard";

const WorkProcess = () => {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8  py-14">
        {/* Work Proscess Title */}
        <div className=" flex flex-col items-center">
          <Image
            src={logo}
            className="mr-3 h-12 w-12"
            alt="Green Hawker Logo"
          />
          <h3 className="text-[#209C5E] font-semibold text-2xl mt-3">
            OUR WORK PROCESS
          </h3>
        </div>

        {/* 01 */}
        <div className="flex space-x-12 mt-10 relative">
          <WorkProcessCard
            title="# Collection"
            number="01"
            des="Our green Hawkers will collect from customers as soon as we get a
        call from our registered customers."
            bg="bg1"
          />
          <div className="flex-1">
            <Image
              src={line}
              className="mr-3 h-44 md:h-48 w-44 md:w-48 top-24 left-[50%] md:left-[48%] absolute"
              alt="Green Hawker Logo"
            />
          </div>
        </div>

        {/* 02 */}
        <div className="flex space-x-8 mt-16 md:mt-32 relative">
          <div className="flex-1">
            <Image
              src={line2}
              className="mr-3 h-40 md:h-48 w-40  md:w-48 left-[22%] md:left-[38%] top-24   absolute"
              alt="Green Hawker Logo"
            />
          </div>
          <WorkProcessCard
            title="# Pick Product"
            number="02"
            des="Our green hawkers will pick the waste product in a transport system."
            bg="bg2"
          />
        </div>

        {/* 03 */}
        <div className="flex space-x-8 mt-24 md:mt-32 relative">
          <WorkProcessCard
            title="# Store Product"
            number="03"
            des="We will store our product in a Warehouse. For further sales."
            bg="bg1"
          />
          <div className="flex-1">
            <Image
              src={line}
              className="mr-3 h-44 md:h-48 w-44 md:w-48 top-24 left-[50%] md:left-[48%] absolute"
              alt="Green Hawker Logo"
            />
          </div>
        </div>

        {/* 04 */}
        <div className="flex space-x-8 mt-16 md:mt-32 relative">
          <div className="flex-1"></div>
          <WorkProcessCard
            title="# Sell to recycle company"
            number="04"
            des=" Finally we will sell our waste product to a recycling company."
            bg="bg1"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
