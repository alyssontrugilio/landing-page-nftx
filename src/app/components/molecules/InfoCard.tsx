type InfoCardProps = {
  id: number;
  title: string;
  description: string;
};

export function Infocard({ id, title, description }: InfoCardProps) {
  return (
    <div className='w-[312px] h-[200px] bg-[#1E2746] p-6 rounded-[18px] '>
      <div className='flex gap-1 mb-4'>
        <p className='font-bold text-lg'>{id}.</p>
        <p className='font-bold text-lg text-start'>{title}</p>
      </div>
      <p className='text-start text-base text-[#D4D6D9]'>{description}</p>
    </div>
  );
}
