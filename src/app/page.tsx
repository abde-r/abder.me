import { Socials } from "@/components/Socials";
import Left from "@/components/Left";
import Right from "@/components/Right";
import { IoOpenOutline } from 'react-icons/io5';


export default function Home() {
  return (
    <main id="/" className="flex-col">
      <div className="justify-center flex mt-4 font-fira text-gray-200 max-md:text-sm"><h1 className="flex bg-[#5d7fa5] px-2 rounded">FREE Palestine 🇵🇸 <a href='https://palestinecampaign.org/' target="blank" className="flex underline font-bold items-center ml-2">#Stop Genocide Now!<IoOpenOutline className="text-lg" /></a></h1></div>
      <div className="max-md:flex max-mxl:flex-col flex h-[90vh] max-mxl:h-[100%] items-center">
        <Left/> 
        <Right />
      </div>
      <Socials />
    </main>
  );
}
