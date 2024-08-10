import { AiOutlineYoutube } from 'react-icons/ai';
const Youtube = () => {
  return (
    <div className='px-4 text-indigo-200 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 pt-10 text-center'>
      <div className='text-center'>
        <h3 className='poppins-bold text-center text-3xl py-1 text-indigo-200 mx-auto'>
          Youtube Journey
        </h3>
        <span className='block bg-indigo-500 h-1 w-[10%] mx-auto'></span>
        <p className='text-gray-400 w-2/3 mx-auto mt-3 px-32'>
          "Explore some of my most notable projects, showcasing my design and
          development skills through innovative and impactful solutions."
        </p>
      </div>
      <span className='block bg-primary h-1 w-36 mx-auto mb-10'></span>

      <div className='grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        <div>
          <iframe
            className='w-full h-[350px] border'
            src='https://www.youtube.com/embed/kVFCFetaZjU'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </div>
        <div>
          <iframe
            className='w-full h-[350px] border'
            src='https://www.youtube.com/embed/3hueYJbdFw0'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
