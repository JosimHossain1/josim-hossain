import Image from 'next/image';
import AboutImage from '../Assets/About.png';

const About = () => {
  return (
    <div>
      <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8 pb-16 flex justify-between items-center md:space-x-10'>
        {/* Image Side */}
        <div className='flex-1 hidden md:block'>
          <Image src={AboutImage} alt='Logo' className='w-[70%] mx-auto' />
        </div>

        {/* About Side */}
        <div className='flex-1'>
          <h1 className='text-xl font-bold  my-4 text-center md:text-left'>
            ABOUT ME
          </h1>
          <p className='text-gray-400 text-[15px] text-center md:text-left'>
            I am Josim Hawladar a front-end developer and Computer Science
            student at Daffodil Polytechnic Institute, who is excellent at
            creating efficient, scalable, and user-friendly front-end web
            solutions for your personal, or business. <br /> <br /> Basically I
            work on React JS, Next JS & Tailwind CSS also have strong knowledge
            front-end tools and a strong understanding of UI/UX principles. As a
            web designer, I responsible for creating visually appealing and
            user-friendly websites that align with your business identities.
            <br />
            <br />A visionary tech enthusiast, always trying to explore and
            adapt new technologies.
            <br />
            <br />
            You can call me - Josim
          </p>
          <a
            href="/"
            type="button"
            className="bg-[#8E60F8] rounded text-sm px-4 py-2 text-center mr-3 mt-5"
          >
            About More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
