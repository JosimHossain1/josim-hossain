import { CiFacebook } from 'react-icons/ci';
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from 'react-icons/ai';
const Header = () => {
  return (
    <div>
      <div>
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  pt-52 min-h-screen '>
          {/* Left Side */}
          <div className='flex'>
            <div className='flex flex-col items-center justify-center mr-10'>
              <span className='w-5 h-5 rounded-full bg-primary block'></span>
              <span className='w-1 h-80 bg1 block mt-[-5px]'></span>
            </div>
            <div>
              <h2 className='mb-6 font-sans text-6xl md:text-8xl font-bold leading-none tracking-tight  text-center md:text-left'>
                Hi, I am <span className='text-[#8E60F8]'> Josim</span>
              </h2>

              <p className='text-lg text-indigo-100 my-5 md:text-left text-center'>
                 Front-end Web Developer.
              </p>

              <div className='flex mt-4 space-x-6 sm:mt-0 text-gray-500'>
                <a href='https://github.com/JosimHossain1'>
                  <AiFillGithub className='hover:text-gray-700 text-2xl cursor-pointer' />
                </a>
                <a href='https://www.linkedin.com/in/josim40212/'>
                  <AiOutlineLinkedin className='hover:text-gray-700 text-2xl cursor-pointer' />
                </a>

                <a href='https://www.facebook.com/josim40212'>
                  <CiFacebook className='hover:text-gray-700 text-2xl cursor-pointer' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
