import { IoOpenOutline } from "react-icons/io5";
import Link from 'next/link'


export const Writings = () => {
    
  const blogs = [
    {
        id: 1,
        title: 'How The Web Works?',
        date: 'Nov 2022',
        description: `What happens when you type a web address in your browser?`,
        imageSrc: 'https://img.freepik.com/premium-photo/iceberg-is-water-word-ice-is-visible-bottom_549702-3218.jpg',
    },
    {
      id: 2,
      title: 'What Database Do I Need For My App?',
      date: 'Jan 2023',
      description: `There are nearly a dozen types of database. Some of the more... `,
      imageSrc: 'https://www.datamation.com/wp-content/uploads/2023/06/dm-top-database-challenges-696x457.png',
    },
  ];

  return (
        <div id='blog' className="w-[80%] mx-auto items-center flex flex-col font-fira font-normal text-base justify-center h-[90vh] max-md:h-[100%] max-md:w-[65%] max-md:py-10">
          {/* <h5 className="text-secondary align-start font-sans font-semibold md:hidden">Writings</h5> */}
          { blogs.map((blog, index) => (
            <>
            <Link
            key={index}
            href={`blog${blog.id}`}
            className="shadow-[0_1px_5px_rgb(100,150,250,0.3)] hover:shadow-[0_1px_10px_rgb(100,150,250,0.3)] items-center rounded my-4 w-[55%] max-md:w-[80%]  max-bsm:w-[95%]"
            style={{
              backgroundImage: `linear-gradient(rgba(148, 180, 189, 0.5), rgba(130, 130, 130, 0.2)), url(${blog.imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex items-center">
              <div className="px-1">
                <span className="inline-block items-center w-[10px] h-[10px] p-1 rounded-lg bg-[#ff605c]"></span>
              </div>
              <div className="px-1">
                <span className="inline-block items-center w-[10px] h-[10px] p-1 rounded-lg bg-[#ffbd44]"></span>
              </div>
              <div className="px-1">
                <span className="inline-block items-center w-[10px] h-[10px] p-1 rounded-lg bg-[#00ca4e]"></span>
              </div>
            </div>
            <div className="flex flex-col justify-between px-4 leading-normal w-full">
              <h1 className="mb-2 text-lg font-bold tracking-tight text-black">{blog.title}</h1>
              <h5 className="mb-2 text-sm  tracking-tight text-gray-900">{blog.date}</h5>
              <p className="mb-3 text-sm text-gray-900">{blog.description}</p>
            </div>
          </Link>
            {/* <hr className="mt-8 p-5"/> */}
          </>
          
          ))}
        </div>
  );
};