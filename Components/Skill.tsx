import Image from 'next/image';
import SkillImage from '../Assets/skill.png';
import Bar from './shared/Bar';
import { FaGraduationCap } from 'react-icons/fa';

const Skill = () => {
  const skill = [
    {
      name: 'Front-End',
      skill: 'NextJS || ReactJS || JavaScript || HTML || CSS.',
    },
    {
      name: 'Back-End',
      skill: 'NodeJS || ExpressJS.',
    },
    {
      name: 'Database',
      skill: 'MongoDB',
    },
    {
      name: 'Design Libraries',
      skill: 'Tailwind CSS || Bootstrap || Daisy UI || ShadCN.',
    },
    {
      name: 'Others',
      skill: 'Github || WordPress || REST API || Adobe || MS Office.',
    },
  ];

  return (
    <div className='px-4 md:px-24 mx-auto sm:max-w-xl md:max-w-screen-xl lg:px-8  pt-10 pb-20'>
        <div className='text-center'>
            <h3 className='poppins-bold text-center text-3xl mb-1 text-indigo-200 border-b-2 w-fit mx-auto'>
              Education & Technical Skills
            </h3>
            <p className='text-gray-400 w-2/3 mx-auto'>
            "Explore my robust educational background and technical expertise in Computer Science and Technology, highlighting the breadth of my covered technical skills."
            </p>
          </div>
      <div className='md:flex justify-between space-y-8 md:space-y-0 md:space-x-24 mt-10'>
        <div className='w-1/2'>
        
          <ol className='relative border-s border-gray-200 my-10'>
            <li className='mb-10 ms-6'>
              <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white'>
                <FaGraduationCap />
              </span>
              <h3 className='poppins-semibold mx-4 text-xl text-white'>
                Computer Science And Technology - Diploma
              </h3>
              <p className='flex justify-between items-center ml-4 py-2 poppins-regular leading-none text-gray-400 '>
                <span>Daffodil Polytechnic Institute</span> <span>2023- Present</span>
              </p>
              <p className='mb-4 ml-4 text-base font-normal text-gray-500'>
                Currently in my 4th semester, 
                Here I am shocasing only technical subjects while also covering essential non-technical subjects such as Mathematics, ethics, environmental studies, business, and physical and mental health education.
              </p>
              <div className='mb-4 ml-4 text-base font-normal text-gray-500'>
                <h4 className='text-lg text-white poppins-semibold'>4th Semester:</h4>
                <ul className='list-disc list-inside ml-5'>
                  <li>Java Programming</li>
                  <li>Data Structure and Algorithms</li>
                  <li>Computer Peripherals & Interfacing</li>
                  <li>Web Design and Development Basics</li>
                </ul>
              </div>
              <div className='mb-4 ml-4 text-base font-normal text-gray-500'>
                <h4 className='text-lg text-white poppins-semibold'>3rd Semester:</h4>
                <ul className='list-disc list-inside ml-5'>
                  <li>Advanced Graphics Design</li>
                  <li>Advanced Python</li>
                  <li>IT Support Services</li>
                </ul>
              </div>
              <div className='mb-4 ml-4 text-base font-normal text-gray-500'>
                <h4 className='text-lg text-white poppins-semibold'>2nd Semester:</h4>
                <ul className='list-disc list-inside ml-5'>
                  <li>Basic Graphics Design</li>
                  <li>Basic Python</li>
                </ul>
              </div>
              <div className='mb-4 ml-4 text-base font-normal text-gray-500'>
                <h4 className='text-lg text-white poppins-semibold'>1st Semester:</h4>
                <ul className='list-disc list-inside ml-5'>
                  <li>Computer Office Applications</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
        <div className='rounded shadow-xl w-1/2'>
          {skill.map((item, index) => (
            <div key={index}>
              <h4 className='mt-4 text-xl text-white poppins-semibold'>
                {item.name}
              </h4>
              <p className='text-gray-400 poppins-regular'>{item.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
