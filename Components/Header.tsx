import Link from "next/link";
import Button from "./shared/Button";
const Header = () => {
  return (
    <div>
      <div>
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  py-52">
          {/* Left Side */}
          <div className="flex">
            <div className="flex flex-col items-center justify-center mr-10">
              <span className="w-5 h-5 rounded-full bg-[#8E60F8] block"></span>
              <span className="w-1 h-80 bg1 block mt-[-5px]"></span>
            </div>
            <div>
              <h2 className="mb-6 font-sans text-6xl md:text-8xl font-bold leading-none tracking-tight  text-center md:text-left">
                Hi, I am <span className="text-[#8E60F8]"> Josim</span>
              </h2>

              <p className="text-lg text-indigo-100 my-5 md:text-left text-center">
                Passionate Front-end Web Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
