import Link from 'next/link';
import { footerMock1, footerMock2, socilaMediaMock } from './footerMock';

export function Footer() {
  return (
    <section className='max-w-[1321px] mx-auto'>
      <hr className='border border-[#EAEBEC]  ' />
      <div className='flex gap-[172px] pt-[70px] pb-8 '>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2 items-center'>
            <svg
              width='60'
              height='60'
              viewBox='0 0 60 60'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect width='60' height='60' rx='30' fill='#293241' />
              <path
                d='M21.7432 41V22.7422H22.04L26.9756 30.6836V41H21.7432ZM21.7432 18.4375V15.0234H26.0107L38.2568 34.7656V41H35.7705L21.7432 18.4375ZM33.0244 22.5195V15.0234H38.2568V30.4609H37.96L33.0244 22.5195Z'
                fill='white'
              />
            </svg>
            <h1 className='font-medium text-4xl text-black'>Nftx</h1>
          </div>
          <div className='max-w-[419px] flex flex-col gap-6'>
            <p className='text-[#7F848D]'>
              Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat.{' '}
            </p>
            <p className='text-[#293241]'>© 2022 All rights reserved.</p>
          </div>
        </div>

        <div className='flex gap-[172px] '>
          <div className='flex flex-col gap-4'>
            {footerMock1.map((option) => (
              <Link
                key={option.id}
                href={option.href}
                className='text-[#7F848D] hover:text-[#424447] '>
                {option.title}
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            {footerMock2.map((option) => (
              <Link
                key={option.id}
                href={option.href}
                className='text-[#7F848D] hover:text-[#424447]'>
                {option.title}
              </Link>
            ))}
          </div>
          <div className='space-y-4'>
            <p className='font-bold text-black'>Social Media</p>
            <div className='flex gap-4'>
              {socilaMediaMock.map((media) => (
                <i
                  key={media.platform}
                  className={`ph ph-${media.icon} p-2.5 bg-[#EAEBEC] rounded-lg  text-[#7F848D] text-2xl cursor-pointer`}></i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
