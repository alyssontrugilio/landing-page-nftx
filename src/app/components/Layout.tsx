import { Header } from './organism/Header';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='text-white flex flex-col w-full items-center'>
      <div className='max-w-[1321px]'>
        <Header />
        {children}
      </div>
    </main>
  );
}
