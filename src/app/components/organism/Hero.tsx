import Image from 'next/image';
import { EmailInput } from '../molecules/EmailInput';

export function Hero() {
  return (
    <section id='/hero' className='max-w-[1321px] flex flex-col items-center'>
      <p className='text-gray-400 font-normal text-2xl mb-7'>
        Using basic skills you can improve your business stuff with Around
      </p>
      <p className='font-bold text-7xl text-center'>One Dashboard to Manage all Your businesses</p>
      <EmailInput />

      <Image
        className='mt-[70px] shadow-md'
        alt='um dashboard'
        height={923}
        width={1320}
        src={'/img/dashboard.webp'}
      />
    </section>
  );
}
