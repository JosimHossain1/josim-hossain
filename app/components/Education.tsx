import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <div className='w-[60%] mx-auto'>
      <div className='text-center'>
        <h3 className='poppins-bold text-center text-3xl py-1 text-indigo-200 w-fit mx-auto'>
          Educational Qualifications
        </h3>
        <span className='block bg-indigo-500 h-1 w-[30%] mx-auto'></span>
        <p className='text-gray-400 mx-auto mt-3 px-32'>
          "Explore my robust educational background and technical expertise in
          Computer Science and Technology."
        </p>
      </div>
      <ol className='relative border-s border-indigo-200 mt-10'>
        <li className='mb-10 ms-6'>
          <span className='absolute flex items-center justify-center w-6 h-6 bg-indigo-400 rounded-full -start-3 ring-8 ring-indigo-200'>
            <FaGraduationCap />
          </span>
          <h3 className='poppins-semibold mx-4 text-xl text-indigo-100'>
            Computer Science And Technology - Diploma
          </h3>
          <p className='flex justify-between items-center ml-4 py-2 poppins-regular leading-none text-gray-400 '>
            <span>Daffodil Polytechnic Institute</span>
            <span>2023- Present</span>
          </p>
          <p className='my-4 ml-4 text-base font-normal text-gray-500'>
            Currently in my 4th semester, Here I am shocasing only technical
            subjects while also covering essential non-technical subjects such
            as Mathematics, ethics, environmental studies, business, and
            physical and mental health education.
          </p>
          <div className='flex justify-between'>
            <div className='mb-4 ml-4 text-base font-normal text-gray-500'>
              <h4 className='text-lg text-indigo-100 poppins-semibold'>
                4th Semester:
              </h4>
              <ul className='list-disc list-inside ml-5'>
                <li>Java Programming</li>
                <li>Data Structure and Algorithms</li>
                <li>Computer Peripherals & Interfacing</li>
                <li>Web Design and Development Basics</li>
              </ul>
            </div>
            <div className='mb-4 text-base font-normal text-gray-500'>
              <h4 className='text-lg text-indigo-100 poppins-semibold'>
                3rd Semester:
              </h4>
              <ul className='list-disc list-inside ml-5'>
                <li>Advanced Graphics Design</li>
                <li>Advanced Python</li>
                <li>IT Support Services</li>
              </ul>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='mb-4 ml-4 text-base font-normal text-gray-500'>
              <h4 className='text-lg text-indigo-100 poppins-semibold'>
                2nd Semester:
              </h4>
              <ul className='list-disc list-inside ml-5'>
                <li>Basic Graphics Design</li>
                <li>Basic Python</li>
              </ul>
            </div>
            <div className='mb-4 text-base font-normal text-gray-500'>
              <h4 className='text-lg text-indigo-100 poppins-semibold'>
                1st Semester:
              </h4>
              <ul className='list-disc list-inside ml-5'>
                <li>Computer Office Applications</li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Education;
