import Image from 'next/image';
import img1 from '../Assets/josim_hawladar_1.jpg';
import img2 from '../Assets/josim_hawladar_2.jpg';
import img3 from '../Assets/josim_hawladar_3.jpg';
import img4 from '../Assets/josim_hawladar_4.jpg';
import img5 from '../Assets/josim_hawladar_5.jpg';
import img6 from '../Assets/josim_hawladar_6.jpg';
import img7 from '../Assets/josim_hawladar_7.jpg';
import img8 from '../Assets/Josim_Hawladar_8.jpg';
import img9 from '../Assets/Josim_hawladar_9.jpg';
import img10 from '../Assets/Josim_Hawladar_10.jpg';
import img11 from '../Assets/Josim_hawladar_11.jpg';
import img12 from '../Assets/Josim_hawladar_12.jpg';

const Gallery = () => {
  return (
    <div className='px-6 md:px-10 lg:px-20'>
      <div className='grid grid-cols-4'>
        <Image className='h-auto max-w-full rounded-lg' src={img1} alt='' />
        <Image className='h-auto max-w-full rounded-lg' src={img2} alt='' />
        <Image className='h-auto max-w-full rounded-lg' src={img4} alt='' />
        <Image className='h-auto max-w-full rounded-lg' src={img5} alt='' />
        <Image className='h-auto max-w-full rounded-lg' src={img7} alt='' />
        <Image className='h-auto max-w-full rounded-lg' src={img8} alt='' />
        <Image className='h-auto max-w-full rounded-lg' src={img9} alt='' />
        <Image className='h-auto max-w-full rounded-lg' src={img10} alt='' />
        <Image className='h-auto max-w-full rounded-lg' src={img11} alt='' />
        <Image className='h-auto max-w-full rounded-lg' src={img12} alt='' />
      </div>
    </div>
  );
};

export default Gallery;
