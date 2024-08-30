const Youtube = () => {
  return (
    <div className='text-indigo-200 mx-auto pt-10 text-center px-6 md:px-10 lg:px-20 py-10'>
      <div className='text-center'>
        <h3 className='poppins-bold text-center text-3xl lg:text-4xl py-2 text-indigo-200 mx-auto'>
          Youtube Journey
        </h3>
        <span className='block bg-indigo-500 h-1 w-[30%] md:w-[20%] lg:w-[10%] mx-auto'></span>
        <p className='text-gray-400 lg:text-lg lg:w-1/2 mx-auto mt-3 lg:px-32'>
          "Explore some of my most notable projects, showcasing my design and
          development skills through innovative and impactful solutions."
        </p>
      </div>
      <span className='block bg-primary h-1 w-36 mx-auto mb-10'></span>

      <div className='grid gap-5 lg:grid-cols-2'>
        <div>
          <iframe
            className='w-full h-[250px] md:h-[350px] xl:h-[400px] lg:h-[500px] border rounded-md shadow-md'
            src='https://www.youtube.com/embed/kVFCFetaZjU'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </div>
        <div>
          <iframe
            className='w-full h-[250px] md:h-[350px] xl:h-[400px] lg:h-[500px] border rounded-md shadow-md'
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
