import '@/app/globals.css';

export default function blog2() {
  return (
    <div id='blog2' className="w-full h-full text-gray-300 my-20">
      <div className="container w-[75%] items-center mx-auto">

      <div className="container mx-auto py-8 px-4 font-fira">
        <h2 className="text-4xl font-semibold font-IBM text-gray-300 capitalize">🧩 How to choose the right database for my app?</h2>
        <div className='mx-auto items-center justify-center flex my-20'>
          <img className='rounded' alt='ice-burg' src={`https://www.datamation.com/wp-content/uploads/2023/06/dm-top-database-challenges-696x457.png`} />
        </div>

        <section className="my-10 text-base">
          <h3 className="text-lg font-semibold text-secondary">How Many Types of Databases Are There?</h3>
          <p className='my-3'> There are nearly a dozen types of databases. Some of the more commonly used categories of databases include: </p>

          <div className="list-disc list-inside w-[98%] mx-auto">
                <h4 className="my-3"><span className='font-semibold'>* Hierarchical Databases: </span>
                  The hierarchical database looks similar to a family tree. A single object (the “parent”) has one or more
                  objects beneath it (the “child”). No child can have more than one parent. In exchange for the rigid and
                  complex navigation of the parent-child structure, the hierarchical database offers high performance, as
                  there’s easy access and a quick querying time. The Windows Registry is one example of this system.
                </h4>
                <h4 className="my-3"><span className='font-semibold'>* Relational Databases: </span>
                  This database commonly uses Structured Query Language (SQL) for operations like creating, reading, updating, and deleting (CRUD) data.
                  This database stores data in discrete tables, which can be joined together by fields known as foreign keys. For example, 
                  you might have a User table that contains data about your users, and join the users table to a Purchases table, which contains 
                  data about the purchases the users have made. MySQL, Microsoft SQL Server, and Oracle are examples.
                </h4>
                <h4 className="my-3"><span className='font-semibold'>* Non-Relational Databases: </span>
                Non-relational management systems are commonly referred to as NoSQL databases. This type of database matured due to increasingly 
                complex modern web applications. These databases' varieties have proliferated over the last decade. Examples include MongoDB and Redis.
                </h4>
                <h4 className="my-3"><span className='font-semibold'>* Object oriented databases: </span>
                Object oriented databases store and manage objects on a database server's disk. 
                Object oriented databases are unique because associations between objects can persist. 
                This means that object oriented programming and the querying of data across complex relationships is fast and powerful. 
                One example of an object oriented database is MongoDB Realm, where the query language constructs native objects through your chosen SDK. 
                Object oriented programming is the most popular programming paradigm.
                </h4>
          </div>
        </section>

        <section className="my-8 mt-20">
          <h2 className="text-lg font-semibold text-secondary">SQL vs NoSQL</h2>
          
          <div className="my-10 text-base">
            <h4 className="mt-2">
              SQL is used for querying relational databases, where data is stored in rows and tables that are linked in
              various ways.
            </h4>
            <div className="mt-4 w-[98%] mx-auto">
              <h4 className="mt-3">Scalability: Most SQL databases are vertically scalable...</h4>
              <h4 className="mt-3">Structure: SQL database schema organizes data in relational, tabular ways...</h4>
              <h4 className='mt-3'>MySQL, PostgresSQL, Oracle Database, Microsoft SQL Server...</h4>
            </div>
          </div>

          <div className="my-10 text-base">
            <h4 className="my-2">
              NoSQL is a non-relational database, meaning it allows different structures than a SQL database (not rows
              and columns) and more flexibility to use a format that best fits the data.
            </h4>
            <div className="my-4 w-[98%] mx-auto">
              <h4 className="my-3">Scalability: NoSQL databases are horizontally scalable...</h4>
              <h4 className="my-3">Structure: NoSQL databases are not relational...</h4>
              <h4 className="my-3">Examples of NoSQL databases: MongoDB, Redis, FaunaDB, CouchDB…</h4>
            </div>
            <div className='flex flex-col justify-center mx-auto items-center mt-5'>
              <img className='w-[40%]' alt='architecture' src={`https://repository-images.githubusercontent.com/219199679/56e7f380-cd33-11eb-90b2-658e8d102a95`} />
            </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
};