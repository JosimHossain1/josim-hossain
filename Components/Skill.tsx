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
        <h3 className='poppins-bold text-center text-3xl py-1 text-indigo-200 mx-auto'>
          Technical Skills
        </h3>
        <span className='block bg-indigo-500 h-1 w-[10%] mx-auto'></span>
        <p className='text-gray-400 w-2/3 mx-auto mt-3 px-32'>
          "Highlighting my technical skills in front-end development, I am
          dedicated to making the internet easy and affordable for everyone."
        </p>
      </div>
      <div className='md:flex justify-between space-y-8 md:space-y-0 md:space-x-24 mt-20'>
        <div className='w-[47%]'>
          <img
            className='rounded-lg'
            src='https://i.ibb.co/7tg62Rf/pexels-faizur-rehman-127740726-10050661.jpg'
          />
        </div>
        <div className='w-[53%] border-l-2 border-gray-800 pl-20'>
          {skill.map((item, index) => (
            <div key={index}>
              <h4 className='text-xl text-indigo-100 poppins-semibold'>
                {item.name}
              </h4>
              <p className='text-gray-500 poppins-regular pb-4'>{item.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
