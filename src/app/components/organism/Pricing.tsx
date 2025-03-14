'use client';
import { useState } from 'react';

export function Pricing() {
  const pricingMock = [
    {
      id: 1,
      planName: 'Starter',
      planPricing: 15,
      isRecommended: false,
      color: '#EDCB50',
      advantages: [
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: false },
        { text: 'Using basic skills you can', isActive: false },
        { text: 'Using basic skills you can', isActive: false },
      ],
    },
    {
      id: 2,
      planName: 'Business',
      planPricing: 75,
      isRecommended: true,
      color: '#1681FE',
      advantages: [
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: false },
        { text: 'Using basic skills you can', isActive: false },
      ],
    },
    {
      id: 3,
      planName: 'Premium',
      planPricing: 15,
      isRecommended: false,
      color: '#448C74',
      advantages: [
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: true },
        { text: 'Using basic skills you can', isActive: true },
      ],
    },
  ];
  return (
    <section className='bg-[#f0f9ff] py-[150px] w-full'>
      <div className=' flex flex-col max-w-[1321px] mx-auto '>
        <div className='flex flex-col gap-8'>
          <p className='font-bold text-5xl text-[#293241]'>Pricing</p>
          <p className='text-[#7F848D]'>
            Using basic skills you can improve your business stuff with Around
          </p>
        </div>
        <div className='flex gap-6 mt-[74px]'>
          {pricingMock.map((plan) => (
            <CardPricing
              key={plan.id}
              advantagesList={plan.advantages}
              colorPlan={plan.color}
              isRecommended={plan.isRecommended}
              planName={plan.planName}
              planPricing={plan.planPricing}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type CardPricingProps = {
  planName: string;
  planPricing: number;
  colorPlan: string;
  advantagesList: {
    text: string;
    isActive: boolean;
  }[];
  isRecommended: boolean;
};

function CardPricing({ planName, planPricing, colorPlan, advantagesList }: CardPricingProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='w-[424px] h-[539px] rounded-3xl bg-white border-2  p-8 flex flex-col'
      style={{ borderColor: isHovered ? colorPlan : undefined }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className='flex gap-3'>
        <div
          style={{ backgroundColor: colorPlan }}
          className='w-[72px] h-[72px] flex justify-center items-center rounded-xl'>
          <svg
            width='38'
            height='38'
            viewBox='0 0 38 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M35.5 4.33317H30V2.49984C30 2.01361 29.8068 1.54729 29.463 1.20347C29.1192 0.859658 28.6529 0.666504 28.1667 0.666504H9.83332C9.34709 0.666504 8.88078 0.859658 8.53696 1.20347C8.19314 1.54729 7.99999 2.01361 7.99999 2.49984V4.33317H2.49999C2.01376 4.33317 1.54744 4.52632 1.20363 4.87014C0.859811 5.21396 0.666656 5.68027 0.666656 6.1665V11.6665C0.666656 13.6114 1.43927 15.4767 2.81454 16.852C4.18981 18.2272 6.05507 18.9998 7.99999 18.9998H10.8233C12.4816 20.8499 14.7174 22.0841 17.1667 22.5015V26.3332H15.3333C13.8746 26.3332 12.4757 26.9126 11.4442 27.9441C10.4128 28.9755 9.83332 30.3745 9.83332 31.8332V35.4998C9.83332 35.9861 10.0265 36.4524 10.3703 36.7962C10.7141 37.14 11.1804 37.3332 11.6667 37.3332H26.3333C26.8196 37.3332 27.2859 37.14 27.6297 36.7962C27.9735 36.4524 28.1667 35.9861 28.1667 35.4998V31.8332C28.1667 30.3745 27.5872 28.9755 26.5557 27.9441C25.5243 26.9126 24.1253 26.3332 22.6667 26.3332H20.8333V22.5015C23.2825 22.0841 25.5183 20.8499 27.1767 18.9998H30C31.9449 18.9998 33.8102 18.2272 35.1854 16.852C36.5607 15.4767 37.3333 13.6114 37.3333 11.6665V6.1665C37.3333 5.68027 37.1402 5.21396 36.7964 4.87014C36.4525 4.52632 35.9862 4.33317 35.5 4.33317V4.33317ZM7.99999 15.3332C7.02753 15.3332 6.0949 14.9469 5.40726 14.2592C4.71963 13.5716 4.33332 12.639 4.33332 11.6665V7.99984H7.99999V11.6665C8.00402 12.9163 8.22102 14.1563 8.64166 15.3332H7.99999ZM22.6667 29.9998C23.1529 29.9998 23.6192 30.193 23.963 30.5368C24.3068 30.8806 24.5 31.3469 24.5 31.8332V33.6665H13.5V31.8332C13.5 31.3469 13.6931 30.8806 14.037 30.5368C14.3808 30.193 14.8471 29.9998 15.3333 29.9998H22.6667ZM26.3333 11.6665C26.3333 13.6114 25.5607 15.4767 24.1854 16.852C22.8102 18.2272 20.9449 18.9998 19 18.9998C17.0551 18.9998 15.1898 18.2272 13.8145 16.852C12.4393 15.4767 11.6667 13.6114 11.6667 11.6665V4.33317H26.3333V11.6665ZM33.6667 11.6665C33.6667 12.639 33.2803 13.5716 32.5927 14.2592C31.9051 14.9469 30.9724 15.3332 30 15.3332H29.3583C29.779 14.1563 29.996 12.9163 30 11.6665V7.99984H33.6667V11.6665Z'
              fill='white'
            />
          </svg>
        </div>
        <div className='flex flex-col text-black items-start'>
          <p style={{ color: colorPlan }}>{planName}</p>
          <p className='font-semibold text-2xl'>
            $ <span className='text-[42px]'>{planPricing}</span>
            <span className='text-base italic font-normal '>Per month</span>
          </p>
        </div>
      </div>
      <hr className='text-[#EAEBEC] w-full h-0.5 mt-8 mb-[50px]' />
      <div className='text-black flex flex-col gap-4'>
        {advantagesList.map(({ text, isActive }, index) => (
          <div
            key={`${index}-${text}`}
            className={`flex gap-2.5 items-center ${isActive ? 'text-black' : 'text-[#A9ADB3]'}`}>
            <i
              style={{ color: isActive ? colorPlan : '#A9ADB3' }}
              className={`ph ph-${isActive ? 'check-circle' : 'x-circle'} text-2xl`}></i>
            <span>{text}</span>
          </div>
        ))}
      </div>
      <button
        className='text-black py-3.5 border rounded-xl mt-[50px] cursor-pointer hover:font-medium'
        style={{ borderColor: colorPlan, color: colorPlan }}>
        Get Start
      </button>
    </div>
  );
}
