import Image from 'next/image';
import { ReactNode } from 'react';

type TestimonialCardProps = {
  avatarImg: string;
  name: string;
  svg: ReactNode;
};

export function TestimonialCard({ avatarImg, name, svg }: TestimonialCardProps) {
  return (
    <div className='bg-[#1E2746]  w-[536px] rounded-2xl flex gap-20 items-center py-6 px-8'>
      <div className='flex gap-3 items-center'>
        <Image alt='' height={60} width={60} src={avatarImg} />
        <p className='font-bold text-2xl'>{name}</p>
      </div>

      {svg}
    </div>
  );
}
