import { infoCardMock } from '@/app/mocks';
import { Infocard } from '../molecules/InfoCard';

export function Values() {
  return (
    <section className='bg-white w-full'>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-5xl text-black mb-6'>How Does it Work?</h2>
        <p className='text-2xl text-[#7F848D]'>
          Using basic skills you can improve your business stuff with Around
        </p>
      </div>
      <div className='flex gap-4 justify-center mt-[111px] mb-[241px]'>
        {infoCardMock.map((info) => (
          <Infocard key={info.id} title={info.title} description={info.description} id={info.id} />
        ))}
      </div>
    </section>
  );
}
