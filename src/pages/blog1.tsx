import '@/app/globals.css';


export default function blog1() {

  return (
      <div id='blog1' className="w-full h-full text-gray-300 my-20">
        <div className="container w-[75%] items-center mx-auto">
        {/* <header className="bg-blue-500 py-4">
          <div className="container mx-auto">
            <h1 className="text-white text-3xl font-bold">Web</h1>
          </div>
        </header> */}
  
        <div className="container mx-auto py-8 px-4 font-fira">
          <h2 className="text-4xl font-semibold font-IBM text-gray-300">🌐 How the Web Works?<span className='font-sans capitalize font-base text-sm italic text-gray-400'>--behind the scenes</span></h2>
          <div className='mx-auto items-center justify-center flex my-10'>
            <img className='rounded' alt='ice-burg' src={`https://img.freepik.com/premium-photo/iceberg-is-water-word-ice-is-visible-bottom_549702-3218.jpg`} />
          </div>
          
          <section className="my-8">
            <h3 className="text-lg font-semibold text-secondary">What happens when you type a web address in your browser?</h3>
            <p className="text-sm mt-2 italic text-gray-400">Fleeting look</p>
  
            <div className="list-disc list-inside w-[98%] mx-auto">
                <div className="mt-2 text-base">
                  <h4 className="mt-3">1- The browser goes to DNS server, and finds the real address of the server that the website lives on.</h4>
                  <h4 className="mt-3">2- The browser sends an HTTP request message to the server, asking to send a copy of the website to the client.
                  This message and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.
                  </h4>
                  <h4 className="mt-3">3 -If the server approves the client’s request, the server sends the client a 200 OK message, 
                  then starts sending the website’s files to the browser as s series of small chunks called data packets.</h4>
                  <h4 className="mt-3">4 -The browser assembles the small chunks into a complete web page and displays it into you.</h4>
                </div>
            </div>
          </section>
  
          <section className="my-8 mt-20">
            {/* <h2 className="text-xl font-bold text-gray-300 w-full">Concepts</h2> */}
            {/* <div className="mt-4"> */}
            <h2 className="font-semibold text-secondary">What in the world a `DNS` is?</h2>
            <div className='text-base mx-auto'>
                <p className="mt-3">
                Domain Name System is like an address book for websites. When you type a web address in your browser, 
                the browser looks at the DNS to find the website's IP address before it can retrieve the website. 
                The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place
                </p>
                <p className="mt-3">
                Real web addresses aren't the nice, memorable strings you type into your address bar to find your favorite websites. 
                They are special numbers that look like this: 192.0.2.172.
                </p>
                <p className="mt-3">
                This is called an IP address, and it represents a unique location on the web. However, 
                it's not very easy to remember, is it? That's why the Domain Name System was invented. 
                This system uses special servers that match up a web address you type into your browser (like "example.com") to the website's real (IP) address.
                </p>
                <p className="mt-3">
                In summary. We trying to resolve IP addresses to domain names, it’s like the server saying it’s this IP! 
                the point is actually not where is it, but HOW can I find it!
                </p>
                <p className="mt-3">
                The mechanism DNS uses is like I don’t know where anything is, but i’ll keep asking going door-to-door then find out what the answer is, or there isn’t one.
                </p>
                <div className='flex flex-col justify-center mx-auto items-center mt-5'>
                  <p className='underline text-xs font-semibold'>DNS be like:</p>
                  <img className='w-[40%]' alt='i-know-a-guy-who-knows-a-guy' src={`https://media.licdn.com/dms/image/D4E22AQGiqb-G1JERIQ/feedshare-shrink_2048_1536/0/1696255318020?e=2147483647&v=beta&t=Z_bdnr0FTVfGYCQO_gNYPBBTdj7SlYBRAVMTYfFxO0E`} />
                </div>
            </div>
  
            <div className="w-[97%] mx-auto mt-20 text-sm">
                <p className="mt-3">
                <span className='font-semibold text-base'>1. Website request</span> - The first step is, to request the actual website via a web browser. 
                Both the OS and browser first look at their own DNS caches to see if the information is already stored locally. If not, the resolver must be asked.
                </p>
                <p className="mt-3">
                <span className='font-semibold text-base'>2. Ask resolver</span> - Once the locally cached DNS records have been checked, the OS asks the resolver. The resolver is usually your ISP (internet service provider). 
                It first checks its own cache to verify if the information is not already stored locally. If it's not, it goes on to ask the root server.
                </p>
                <p className="mt-3">
                <span className='font-semibold text-base'>3. Ask root server</span> - The root server looks at the last section of the request (the .com portion). Although the root server cannot locate the IP address of 
                the website, it tells the resolver where the top level domain (TLD) servers are for .com. The resolver then stores this information for later use.
                </p>
                <p className="mt-3">
                <span className='font-semibold text-base'>4. Ask TLD server</span> - The resolver goes on to ask the TLD servers the IP address of the website in question. Although the TLD servers can't provide 
                us with the required information, they know where to direct our request. The TLD servers provide the resolver with a list of name servers for that website. 
                Again, the resolver stores this information for later use.
                </p>
                <p className="mt-3">
                <span className='font-semibold text-base'>5. Ask authoritative name servers</span> - Finally, now that the resolver knows what the authoritative name servers are, it can query these name servers and 
                retrieve the required IP information. The authoritative name servers contain all the necessary information regarding a particular domain.
                </p>
                <p className="mt-3">
                <span className='font-semibold text-base'>6. Cache the IP and return it to the browser</span> - Now that the resolver knows the IP of said domain, it will cache it for later use. At this point, 
                the IP is delivered to your OS where it is locally cached as well. The OS then passes this information on to the browser. 
                Once the browser knows the IP address of the website, it can then begin requesting and receiving information from the website's origin server.
                </p>
            </div>
  
  
            <div className='text-base mx-auto mt-20'>
              <p className="font-bold mx-auto text-secondary">DNS Records</p>
              <p className="mt-3">DNS servers use DNS records to store information about domain names. There are several types of DNS records, each with specific purpose</p>
              <div className="mx-auto mt-5 text-sm w-[98%]">
                <p className="mt-3">
                <span className='font-semibold text-base'>1. A (Address) Record:</span> This type of record maps a domain name to an IP address. For example, the A record for "google.com" might map to the IP address 172.217.1.46.
                </p>
                <p className="mt-3">
                <span className='font-semibold text-base'>2. MX (Mail Exchange) Record:</span> This type of record specifies which mail server is responsible for handling email for a particular domain. For example, 
                the MX record for "example.com" might specify that the mail server for that domain is "mail.example.com".
                </p>
                <p className="mt-3">
                <span className='font-semibold text-base'>3. CNAME (Canonical Name) Record:</span> This type of record maps one domain name to another. For example, a CNAME record might map "www.example.com" to "example.com".
                </p>
                <p className="mt-3">
                <span className='font-semibold text-base'>4. NS (Name Server) Record:</span> This type of record specifies which DNS server is authoritative for a particular domain. For example, the NS record for "example.com" 
                might specify that the authoritative DNS server for that domain is "dns1.example.com".
                </p>
                <p className="mt-3">
                <span className='font-semibold text-base'>5. TXT (Text) Record:</span> This type of record is used to store arbitrary text data associated with a domain. It can be used for a variety of purposes, 
                such as domain verification or SPF records for email.
                </p>
              </div>
            </div>
  
            <div className='text-base mx-auto mt-20'>
              <p className="font-bold mx-auto text-secondary">DNS Caching</p>
              <p className="mt-3">DNS caching refers to the temporary storage of information about previous DNS lookups on a machine's OS or web browser. 
              Keeping a local copy of a DNS lookup allows your OS or browser to quickly retrieve it and thus a website's URL can be resolved to its corresponding 
              IP much more efficiently. The basic function of different cache types is all more or less the same. However, if you need a more comprehensive explanation of cache.</p>
  
              <p className="mt-3">DNS caching helps to reduce the load on authoritative DNS servers by reducing the number of queries they receive. 
              This can significantly improve the speed and reliability of the DNS system by reducing latency and network congestion. Caching DNS servers also help to provide 
              resilience to DNS outages or failures by allowing client devices to continue to access DNS records from the cache even if the authoritative DNS server is unavailable.</p>
  
              <p className="mt-3">However, DNS caching can also lead to potential issues such as stale DNS records or DNS poisoning. To mitigate these 
              issues, DNS administrators should monitor their DNS caches regularly, and implement security measures such as DNSSEC (DNS Security Extensions) to prevent DNS 
              spoofing and other attacks.</p>
  
              <p className="mt-3">However, DNS caching can also lead to potential issues such as stale DNS records or DNS poisoning. To mitigate these 
              issues, DNS administrators should monitor their DNS caches regularly, and implement security measures such as DNSSEC (DNS Security Extensions) to prevent DNS 
              spoofing and other attacks.</p>
            </div>
  
            <div className='text-base mx-auto mt-20'>
              <p className="font-bold mx-auto text-secondary">DNS Security</p>
              <p className="mt-3">Because DNS is such a critical part of the internet infrastructure, it is also a common target for cyberattacks. 
              DNS attacks can take many forms, from DNS spoofing to DNS hijacking, as described above. DNSSEC (DNS Security Extensions) is a set of protocols designed to add 
              an additional layer of security to the DNS lookup process. DNSSEC works by adding digital signatures to DNS records, which allows DNS clients to verify that 
              the records they receive are authentic.</p>
              <p className="mt-3">Another common DNS security measure is DNS filtering, which is the process of blocking access to certain domains or IP 
              addresses. DNS filtering is often used in corporate environments to prevent employees from accessing malicious websites or other inappropriate content.</p>
            </div>
            {/* </div> */}
          </section>
        </div>
        </div>
      </div>
    );
  
}
