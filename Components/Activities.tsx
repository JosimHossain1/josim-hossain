import Image from 'next/image';
import img2 from '../Assets/josim_hawladar_2.jpg';
const Activities = () => {
  return (
    <div className='px-6 md:px-10 lg:'>
      <div className='text-center'>
        <h3 className='poppins-bold text-center text-3xl py-1 text-indigo-200 mx-auto'>
          My Achivements
        </h3>
        <span className='block bg-indigo-500 h-1 w-[10%] mx-auto'></span>
        <p className='text-gray-400 w-2/3 mx-auto mt-3 px-32'>
          "Explore some of my most notable projects, showcasing my design and
          development skills through innovative and impactful solutions."
        </p>
      </div>

      <div className='mt-20 flex justify-between items-center shadow-2xl shadow-slate-800 p-10 bg-slate-800 border border-slate-700 rounded-md space-x-10'>
        <div className='video_section w-1/2'>
          <video
            controls
            className='w-[600px] border shadow-lg border-indigo-200 rounded'
            autoPlay
          >
            <source src='/video.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='text_section w-1/2'>
          <h1 className='text-indigo-200 text-2xl poppins-semibold mb-4'>
            National Achievement in Web Technology
          </h1>
          <p className='text-gray-200 text-[15px] text-center md:text-left'>
            In May 2023, I embarked on an exciting journey when I received and
            completed a form from my institute for the Web Technology trade.
            Shortly thereafter, I was invited by the Office of the District
            Commissioner in Dhaka for verification and was selected for the
            division-level competition. With dedication and rigorous
            preparation, I competed and excelled at this level, earning the
            opportunity to participate in the national competition.
          </p>
          <p className='text-gray-200 text-[15px] text-center md:text-left mt-5'>
            On December 1-2, 2023, I showcased my skills using NEXT.js, Tailwind
            CSS, and MongoDB, competing against some of the most talented
            individuals in the country. My hard work and innovation paid off
            when I achieved 3rd place nationally on February 10, 2024, a
            testament to my proficiency and passion for web technology. This
            accolade stands as a proud milestone in my career, demonstrating my
            technical prowess and commitment to excellence.
          </p>
        </div>
      </div>

      <div className='mt-20 flex justify-between items-center shadow-2xl shadow-slate-800 p-10 bg-slate-800 border border-slate-700 rounded-md space-x-10'>
        <div className='text_section w-1/2'>
          <h1 className='text-indigo-200 text-2xl poppins-semibold mb-4'>
            Project Fest 2024 - Daffodil Polytechnic Institute
          </h1>
          <p className='text-gray-200 text-[15px] text-center md:text-left mt-5'>
            At Daffodil Polytechnic Institute’s "Project Fest 2024," over 40
            innovative projects were presented by diploma engineering students.
            The event, inaugurated by FBBCI Innovation and Research Centre’s CEO
            Bikarna Kumar Ghosh, focused on the importance of creativity in
            solving real-world problems.
          </p>
          <p className='text-gray-200 text-[15px] text-center md:text-left mt-5'>
            I showcased my project, "Green Hawker," which tackles the issue of
            wasted paper and plastic by collecting and recycling them. This
            initiative not only addresses environmental concerns but also
            promotes sustainable practices. Competing among impressive entries,
            "Green Hawker" was honored as the 4th runners-up. Distinguished
            guests acknowledged the potential of these projects to contribute
            significantly to solving future challenges.
          </p>
        </div>
        <div className='video_section w-1/2'>
          <Image
            src={img2}
            className='w-500 rounded-md'
            alt='Josim Hawladar Achivement'
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
