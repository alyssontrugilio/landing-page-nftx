import Link from 'next/link';

export function ButtonTrial() {
  return (
    <Link
      href={'#'}
      className='text-[#293241] bg-white py-3.5 px-6 rounded-2xl font-normal flex gap-2 items-center'>
      <p> Start free 14 trial</p>
      <p className='ph ph-arrow-right font-bold'></p>
    </Link>
  );
}
