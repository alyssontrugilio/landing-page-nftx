import { Analyse } from './components/organism/Analyse';
import { CustomerReview } from './components/molecules/CustomerReview';
import { Hero } from './components/organism/Hero';
import { TestimonialCharts } from './components/organism/TestimonialCharts';
import { Values } from './components/organism/Values';
import { Pricing } from './components/organism/Pricing';
import { Testimonial } from './components/organism/Testimonial';
import { ButtonTrial } from './components/atoms/ButtonTrial';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <CustomerReview />
      <Values />
      <TestimonialCharts />
      <Analyse />
      <Pricing />
      <Testimonial />
      <section className='bg-white w-full pb-[150px]'>
        <div className='bg-[#293241]  max-w-[1321px] mx-auto rounded-[40px] pl-[60px] pt-[65px] flex gap-24 items-start'>
          <div className='max-w-[486px] pt-[26px] pb-[90px] flex flex-col items-baseline gap-7'>
            <p className='text-white font-bold text-5xl'>
              The best flows on the planet, at your fingertips.
            </p>
            <p className='text-xl'>
              Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat.{' '}
            </p>
            <ButtonTrial />
          </div>

          <Image
            className='rounded-4xl bg-trasparent'
            alt='dashboard'
            height={549}
            width={784}
            src={'/img/dashboard.webp'}
          />
        </div>
      </section>
    </>
  );
}
