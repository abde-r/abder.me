
export const Blog2 = () => {
  return (
    <div id='blog2' className="w-full h-full text-gray-300">
      <div className="container w-[95%] items-center mx-auto">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold">Databases</h1>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold">How to choose a database for my app?</h2>

        <section className="my-8">
          <h3 className="text-xl font-semibold  text-pink-500">How Many Types of Databases Are There?</h3>
          <p> There are nearly a dozen types of databases. Some of the more commonly used categories of databases include: </p>

          <div className="list-disc list-inside mt-4 w-[95%] mx-auto">
              <div className="mt-4">
                <h4 className="font-semibold text-gray-300">* Hierarchical Databases</h4>
                <p className="text-sm">
                  The hierarchical database looks similar to a family tree. A single object (the “parent”) has one or more
                  objects beneath it (the “child”). No child can have more than one parent. In exchange for the rigid and
                  complex navigation of the parent-child structure, the hierarchical database offers high performance, as
                  there’s easy access and a quick querying time. The Windows Registry is one example of this system.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-300">* Relational Databases</h4>
                <p className="text-sm">
                  This database commonly uses Structured Query Language (SQL) for operations like creating, reading, updating, and deleting (CRUD) data.
                  This database stores data in discrete tables, which can be joined together by fields known as foreign keys. For example, 
                  you might have a User table that contains data about your users, and join the users table to a Purchases table, which contains 
                  data about the purchases the users have made. MySQL, Microsoft SQL Server, and Oracle are examples.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-300">* Non-Relational Databases</h4>
                <p className="text-sm">
                Non-relational management systems are commonly referred to as NoSQL databases. This type of database matured due to increasingly 
                complex modern web applications. These databases' varieties have proliferated over the last decade. Examples include MongoDB and Redis.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-300">* Object oriented databases</h4>
                <p className="text-sm">
                Object oriented databases store and manage objects on a database server's disk. 
                Object oriented databases are unique because associations between objects can persist. 
                This means that object oriented programming and the querying of data across complex relationships is fast and powerful. 
                One example of an object oriented database is MongoDB Realm, where the query language constructs native objects through your chosen SDK. 
                Object oriented programming is the most popular programming paradigm.
                </p>
              </div>
          </div>
        </section>

        <section className="my-8 mt-20">
          <h2 className="text-2xl font-bold text-pink-500 w-full">SQL vs NoSQL</h2>
          <div className="mt-4">
            <p className="mt-2 text-sm">
              SQL is used for querying relational databases, where data is stored in rows and tables that are linked in
              various ways.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 w-[95%] mx-auto">
              <div>
                <h4 className="font-semibold">Scalability:</h4>
                <p className="w-[95%] mx-auto">Most SQL databases are vertically scalable...</p>
              </div>
              <div>
                <h4 className="font-semibold">Structure:</h4>
                <p className="w-[95%] mx-auto">SQL database schema organizes data in relational, tabular ways...</p>
              </div>
            </div>

            <div className="mt-4  w-[95%] mx-auto">
              <h4 className="font-semibold text-gray-400">Examples of SQL databases:</h4>
              <div className="list-disc list-inside mt-2 text-sm  w-[95%] mx-auto">
                <p>MySQL, PostgresSQL, Oracle Database, Microsoft SQL Server...</p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <p className="mt-2 text-sm">
              NoSQL is a non-relational database, meaning it allows different structures than a SQL database (not rows
              and columns) and more flexibility to use a format that best fits the data.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 w-[95%] mx-auto">
              <div>
                <h4 className="font-semibold">Scalability:</h4>
                <p className="w-[95%] mx-auto">NoSQL databases are horizontally scalable...</p>
              </div>
              <div>
                <h4 className="font-semibold">Structure:</h4>
                <p className="w-[95%] mx-auto">NoSQL databases are not relational...</p>
              </div>
            </div>

            <div className="mt-4 w-[95%] mx-auto">
              <h4 className="font-semibold text-gray-400">Examples of NoSQL databases:</h4>
              <div className="list-disc list-inside mt-2 w-[95%] mx-auto">
                <p>MongoDB, Redis, FaunaDB, CouchDB…</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
};
