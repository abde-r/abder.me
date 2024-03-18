import { IoOpenOutline } from "react-icons/io5";

export const Blog = () => {
    
  const blogs = [
    {
        id: 1,
        title: 'How The Web Works?',
        date: 'Nov 2022',
        content:
            `What happens when you type a web address in your browser?`,
        imageSrc:
            'https://andonix.com/wp-content/uploads/2020/02/Iceberg-of-Ignorance-1.jpg',
    },
    {
        id: 2,
        title: 'What Database Do I Need For My App?',
        date: 'Jan 2023',
        content:
            `There are nearly a dozen types of database. Some of the more... `,
        imageSrc:
            'https://www.datamation.com/wp-content/uploads/2023/06/dm-top-database-challenges-696x457.png',
    },
  ];

  return (
        <div id='blog' className="Blog">
          { blogs.map((blog, index) => (
            <div key={index} className="work-card">
              <div>
                  <img src={blog.imageSrc} className='rounded-l-md object-cover h-full w-full max-h-48' />
              </div>
              <div className="card-content">
                <div className="card-content-title">
                  <h1>{ blog.title }</h1>
                  <a className='link' href={`${process.env.GITHUB}/httperv`} target='_blank'><IoOpenOutline /></a>
                </div>
                <p>{ blog.date }</p>
                <h3>{ blog.content }</h3>
              </div>
            </div>
          ))}
        </div>
  );
};