import Image from 'next/image';
import { EmailInput } from './components/molecules/EmailInput';
import { CustomerReview } from './components/molecules/CustomerReview';
import { Infocard } from './components/molecules/InfoCard';
import { infoCardMock } from './mocks';
import { Testimonial } from './components/organism/Testimonial';
import { Analyse } from './components/molecules/Analyse';
import { Pricing } from './components/molecules/Pricing';

export default function Home() {
  return (
    <div className='flex flex-col items-center text-center'>
      <p className='text-gray-400 font-normal text-2xl mb-7'>
        Using basic skills you can improve your business stuff with Around
      </p>
      <p className='font-bold text-7xl'>One Dashboard to Manage all Your businesses</p>
      <EmailInput />

      {/* Dasboard image */}
      <Image
        className='mt-[70px] shadow-md mb-[150px]'
        alt='um dashboard'
        height={923}
        width={1320}
        src={'/img/dashboard.webp'}
      />
      <CustomerReview />
      <div className='mt-[150px]'>
        <div className='space-y-6'>
          <p className='font-bold text-5xl'>How Does it Work?</p>
          <p className='text-2xl font-normal'>
            Using basic skills you can improve your business stuff with Around
          </p>
        </div>
        <div className='mt-[111px] flex gap-6 '>
          {infoCardMock.map((info) => (
            <Infocard
              id={info.id}
              title={info.title}
              description={info.description}
              key={info.id}
            />
          ))}
        </div>
        <Testimonial />
        <Analyse />
        <Pricing />
      </div>
    </div>
  );
}
