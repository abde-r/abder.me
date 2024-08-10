import Link from 'next/link';
import { IoNewspaper } from 'react-icons/io5';
import { getAllWritings } from '@/pages/api/writings';

export const Writings = async () => {
  const writings: any = await getAllWritings();

  return (
    <div id="blog" className="w-full mx-auto items-center flex flex-col font-fira font-normal text-base justify-center max-mxl:w-[95%] max-md:py-10">
      {writings.map((writing: any, index: number) => (
        <Link
          key={index}
          href={`writings/${writing.slug}`}
          className="flex shadow-[5px_5px_0px_0px_#87a9d5] hover:shadow-[3px_3px_2px_0px_#87a9d5] rounded-xl p-2 border-2 border-[#bababa] ease-in-out hover:ease-in-out items-center my-4 w-[60%] max-md:w-[80%] max-bsm:w-[95%]"
        >
          <div className="p-3 bg-[#7694bc] mx-1 rounded-xl max-md:hidden">
            <IoNewspaper />
          </div>
          <div className="ml-3 w-[100%]">
            <div className="flex items-center justify-between mb-2 tracking-tight">
              <p className="text-lg font-semibold text-secondary tracking-tight max-md:text-sm">{writing.meta.title}</p>
              <span className="text-xs font-bold uppercase tracking-tight text-gray-400 ml-2">{writing.meta.date}</span>
            </div>
            <p className="text-xs text-gray-400">{writing.meta.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
