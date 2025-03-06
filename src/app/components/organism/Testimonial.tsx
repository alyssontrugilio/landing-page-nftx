import Image from 'next/image';

export function Testimonial() {
  return (
    <section className='w-full bg-white pt-[150px] pb-[150px]'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-8'>
          <p className='font-bold text-5xl text-[#293241] text-center'>Testimonial</p>
          <p className='text-[#7F848D]'>
            Using basic skills you can improve your business stuff with Around
          </p>
        </div>
        <div className='flex gap-[68px] items-center'>
          <i className='ph ph-arrow-left text-black bg-[#F0F9FF] p-2.5 rounded-xl font-extrabold cursor-pointer'></i>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[1096px] h-[430px] bg-[#F0F9FF] rounded-[18px] mt-[75px] p-8'>
              <div className=' flex gap-9 h-full'>
                <Image alt='' src={'/img/client1.webp'} width={315} height={366} />
                <div className='py-[76px] flex flex-col'>
                  <div className='space-y-5'>
                    <p className='font-bold text-black text-2xl'>Leslie Alexander</p>
                    <p className='text-[#7F848D] text-base font-light'>CEO, Digital PT</p>
                  </div>
                  <hr className='border border-[#EAEBEC] my-6 w-[189px]' />
                  <p className='text-start italic text-[#293241] font-light text-xl'>
                    Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit
                    erat. Etiam non erat volutpat, consectetur nunc vitae, posuere diam.
                    <br />
                    Sed nisl nisi, rhoncus nec orci at, convallis ullamcorper purus. Suspendisse
                    placerat tortor vitae neque iaculis efficitur. Nulla sed consectetur mi, nec
                    tempor lorem. Aenean nec aliquet leo.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex gap-2 mx-auto'>
              <div className='w-2.5 h-2.5 rounded-full bg-[#1C51FD]'></div>
              <div className='w-2.5 h-2.5 rounded-full bg-[#EAEBEC]'></div>
              <div className='w-2.5 h-2.5 rounded-full bg-[#EAEBEC]'></div>
              <div className='w-2.5 h-2.5 rounded-full bg-[#EAEBEC]'></div>
              <div className='w-2.5 h-2.5 rounded-full bg-[#EAEBEC]'></div>
            </div>
          </div>
          <i className='ph ph-arrow-right text-white bg-[#1C51FD] p-2.5 rounded-xl font-extrabold cursor-pointer'></i>
        </div>
      </div>
    </section>
  );
}
