

export const Blog = () => {
    
  const blogs = [
    {
        id: 1,
        title: 'How The Web Works?',
        date: 'Nov 6, 2022',
        content:
            `What happens when you type a web address in your browser?`,
        imageSrc:
            'https://andonix.com/wp-content/uploads/2020/02/Iceberg-of-Ignorance-1.jpg',
    },
    {
        id: 2,
        title: 'What Database Do I Need For My App?',
        date: 'Jan 25, 2023',
        content:
            `There are nearly a dozen types of database. Some of the more... `,
        imageSrc:
            'https://www.datamation.com/wp-content/uploads/2023/06/dm-top-database-challenges-696x457.png',
    },
  ];

  return (
    <div id='blog' className='w-full h-screen text-gray-300 px-5'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 gap-1 my-3'>
          {blogs.map((blog, index) => (
            // <Link to={`blog`+blog.id} key={index}>


            <div className="work-card">
          {/* <div className="card-date">
            <h3>dec 2024</h3>
          </div> */}
          <div className="card-content">
              <div  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto my-2 relative h-full' >
                <div className='w-1/3 h-full'>
                    <img src={blog.imageSrc} className='rounded-l-md object-cover h-full w-full max-h-48' />
                </div>
                <div className='w-2/3 p-4'>
                    <h3 className='text-xl font-bold mb-2'>{blog.title}</h3>
                    <p className='text-sm text-pink-500 mb-2'>{blog.date}</p>
                    <p className='text-sm'>{blog.content}</p>
                </div>
              </div>
            {/* <div className="card-content-title">
              <h1>Transcendence</h1>
            </div>
            <h3>FullStack web app with online multiplayer game and real-time chat app</h3>
            <div className="tags">
              <p>Typescript</p>
              <p>React</p>
              <p>NextJs</p>
              <p>Prisma</p>
              <p>webSockets</p>
              <p>Docker-Compose</p>
            </div> */}
          </div>
        </div>

            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
};