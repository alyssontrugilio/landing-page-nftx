import { ButtonTrial } from '../atoms/ButtonTrial';

export function Header() {
  return (
    <div className='flex gap-51 '>
      <div className='flex gap-2 items-center '>
        <svg
          width='60'
          height='60'
          viewBox='0 0 60 60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect width='60' height='60' rx='30' fill='white' />
          <path
            d='M21.7432 41V22.7422H22.04L26.9756 30.6836V41H21.7432ZM21.7432 18.4375V15.0234H26.0107L38.2568 34.7656V41H35.7705L21.7432 18.4375ZM33.0244 22.5195V15.0234H38.2568V30.4609H37.96L33.0244 22.5195Z'
            fill='#121418'
          />
        </svg>

        <h1 className='font-medium text-4xl'>Nftx</h1>
      </div>
      <div className='flex gap-11 items-center font-bold text-base'>
        <p className='text-gray-400 hover:text-white cursor-pointer  '>Home</p>
        <p className='text-gray-400 hover:text-white cursor-pointer '>Feature</p>
        <p className='text-gray-400 hover:text-white cursor-pointer '>Who to work</p>
        <p className='text-gray-400 hover:text-white cursor-pointer '>Pricing</p>
        <p className='text-gray-400 hover:text-white cursor-pointer '>Reviews</p>
      </div>
      <ButtonTrial />
    </div>
  );
}
