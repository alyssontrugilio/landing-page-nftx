export function EmailInput() {
  return (
    <div className='relative inline-block mt-8'>
      <input
        type='email'
        placeholder='input your mail...'
        className='border border-white rounded-full py-8 pl-12 pr-32 w-[648px] placeholder:text-white placeholder:text-lg'
      />
      <button className='absolute right-0 top-0 bg-white text-black font-bold text-xl py-8 px-10 rounded-full'>
        Try for Free
      </button>
    </div>
  );
}
