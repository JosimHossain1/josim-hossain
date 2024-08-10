import Image from 'next/image';
import img1 from '../Assets/josim_hawladar_1.jpg';
import img2 from '../Assets/josim_hawladar_2.jpg';
import img3 from '../Assets/josim_hawladar_3.jpg';
import img4 from '../Assets/josim_hawladar_4.jpg';
import img5 from '../Assets/josim_hawladar_5.jpg';
import img6 from '../Assets/josim_hawladar_6.jpg';
import img7 from '../Assets/josim_hawladar_7.jpg';
import img9 from '../Assets/Josim_hawladar_9.jpg';
import img10 from '../Assets/Josim_Hawladar_10.jpg';
import img13 from '../Assets/Josim_hawladar_13.jpg';
import img14 from '../Assets/josim_hawladar_14.jpg';
import img11 from '../Assets/Josim_hawladar_11.jpg';
import img12 from '../Assets/Josim_hawladar_12.jpg';
import img16 from '../Assets/josim_hawladar_16.jpg';
import img17 from '../Assets/josim_hawladar_17.jpg';
import img18 from '../Assets/josim_hawladar_18.jpg';
import img19 from '../Assets/josim_hawladar_19.jpg';

const Gallery = () => {
  return (
    <div className='px-6 md:px-10 lg:px-20 py-10'>
      <div className='text-center'>
        <h3 className='poppins-bold text-center text-3xl py-1 text-indigo-200 mx-auto'>
          Photo Gallery
        </h3>
        <span className='block bg-indigo-500 h-1 w-[30%] md:w-[20] lg:w-[10] mx-auto'></span>
        <p className='text-gray-400 lg:w-2/3 mx-auto mt-3 lg:px-32'>
          "Capturing Moments of Innovation and Success: A Visual Journey Through
          My Accomplishments and Projects"
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-10'>
        <div className='grid gap-4'>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img1}
              alt=''
            />
          </div>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img2}
              alt=''
            />
          </div>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img17}
              alt=''
            />
          </div>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img13}
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img11}
              alt=''
            />
          </div>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img6}
              alt=''
            />
          </div>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img10}
              alt=''
            />
          </div>

          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img12}
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img3}
              alt=''
            />
          </div>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img19}
              alt=''
            />
          </div>

          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img5}
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img18}
              alt=''
            />
          </div>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img16}
              alt=''
            />
          </div>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img14}
              alt=''
            />
          </div>
          <div>
            <Image
              className='h-auto max-w-full rounded-lg border-2 border-white'
              src={img9}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
