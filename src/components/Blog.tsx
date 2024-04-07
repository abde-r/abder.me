import { IoOpenOutline } from "react-icons/io5";
import Link from 'next/link'


export const Blog = () => {
    
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
        <div id='blog' className="Blog">
          { blogs.map((blog, index) => (
            <Link href={`blog`+blog.id} key={index}>
              <div key={index} className="blog-card">
                <div className="blog-card-background">
                    <img src={blog.imageSrc} className='rounded-l-md object-cover h-full w-full max-h-48' />
                </div>
                <div className="blog-card-content">
                  {/* <div className="card-content-title"> */}
                    <h1>{ blog.title }</h1>
                    {/* <a className='link' href={`${process.env.GITHUB}/httperv`} target='_blank'><IoOpenOutline /></a> */}
                  {/* </div> */}
                  <p>{ blog.date }</p>
                  <h3>{ blog.description }</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
  );
};