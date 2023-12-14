import Image from "next/image";
import AboutImage from "../Assets/About.png";

const About = () => {
  return (
    <div>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8 pb-16 flex justify-between items-center md:space-x-10">
        {/* Image Side */}
        <div className="flex-1 hidden md:block">
          <Image src={AboutImage} alt="Logo" className="w-[70%] mx-auto" />
        </div>

        {/* About Side */}
        <div className="flex-1">
          <h1 className="text-xl font-bold  my-4 text-center md:text-left">
            ABOUT ME
          </h1>
          <p className="text-gray-500 text-[15px] text-center ">
            I&apos;m Josim hossain a skilled front-end developer with 2 years of
            experience. My primary specialization is NextJS and Tailwind CSS,
            and expertise in modern front-end technology.
            <br />
            <br />
            I&apos;m a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let &apos; s work together to bring your ideas
            to life!
          </p>
          {/* <a
            href="/"
            type="button"
            className="bg-[#8E60F8] font-semibold rounded-lg text-md px-4 py-2 text-center mr-3 mt-5"
          >
            Resume
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default About;
