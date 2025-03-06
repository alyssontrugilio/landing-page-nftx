import { Footer } from './organism/footer/Footer';
import { Header } from './organism/Header';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-[#fff] '>
      <div className='bg-black  flex flex-col items-center'>
        <header className='my-[62px]'>
          <Header />
        </header>
        {children}
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
