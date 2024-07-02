import Image from 'next/image';
import SkillImage from '../Assets/skill.png';
import Bar from './shared/Bar';

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
    <div className=' px-4 md:px-24 mx-auto sm:max-w-xl md:max-w-screen-xl lg:px-8 text-center pt-10 pb-20'>
      {/*Title  */}

      <h3 className='poppins-bold text-4xl mb-1 text-indigo-200'>
        Technical Skills
      </h3>
      <p className='text-gray-400 w-1/2 mx-auto'>
        A concise list of my technical expertise and proficiencies, highlighting
        my capabilities with various tools, technologies, and methodologies.
      </p>

      {/* Service area */}
      <div className='md:flex justify-between items-center space-y-8 md:space-y-0 md:space-x-8 mt-10'>
        <div className='md:w-1/2 hidden md:block'>
          <Image src={SkillImage} className='w-[500px] h-[500px]' alt='Skill' />
        </div>

        <div className='p-4 rounded shadow-xl text-left font-serif md:w-1/2'>
          {skill.map((item, index) => (
            <div key={index}>
              <h4 className='mt-4 text-2xl text-white poppins-semibold'>{item.name}</h4>
              <p className='text-gray-400 poppins-regular'>{item.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
