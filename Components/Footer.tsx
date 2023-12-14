import { CiFacebook } from "react-icons/ci";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="border-t border-[#201548]">
      <footer className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex justify-between items-center py-4 ">
        <div className="text-sm text-[#cdcdcd]">
          Copyright &copy; 2023 josim hossain
        </div>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-gray-500">
          <a href="https://www.facebook.com/josim40212">
            <CiFacebook className="hover:text-gray-700 text-2xl cursor-pointer" />
          </a>
          <a href="https://www.youtube.com/@josimthecodemaster">
            <AiOutlineYoutube className="hover:text-gray-700 text-2xl cursor-pointer" />
          </a>
          <a href="https://github.com/JosimHossain1">
            <AiFillGithub className="hover:text-gray-700 text-2xl cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/josim40212/">
            <AiOutlineInstagram className="hover:text-gray-700 text-2xl cursor-pointer" />
          </a>
          <a href="https://twitter.com/JosimHossain11">
            <AiFillTwitterCircle className="hover:text-gray-700 text-2xl cursor-pointer" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
