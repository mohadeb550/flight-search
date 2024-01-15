import OnewayTipLeft from "./OnewayTipLeft";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import FlightDetailsCard from "./FlightDetailsCard";
import Pagination from "./Pagination";
import { CiFilter } from "react-icons/ci";


export default function OnewaySection() {

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 my-16 gap-9">

        {/* filter section for tablet and smaller screen  */}
        <div className="px-6 py-[16px] w-full shadow-inner shadow-slate-200  border border-slate-400/20 rounded-md flex justify-between gap-3 items-center lg:hidden">
        <span className="text-gray-500 text-sm md:text-[16px] font-semibold flex items-center gap-2">Filter Your Search Results </span> 
        <CiFilter size={25} />
     </div>

            {/* Aside bar section  */}
        <div className="hidden lg:block">
        <OnewayTipLeft/>
        </div>

        <div className="lg:col-span-2">
            <div className="flex relative justify-center items-center">
                <BiSolidLeftArrow size={28} className="text-red-500 absolute left-0" />
                <h1 className="text-lg text-gray-700 xl:text-3xl font-semibold">Flights from Dhaka to Chittagong</h1>
                <BiSolidRightArrow size={28} className="text-red-500 absolute right-0" />
            </div>

            <div className="flex border bg-white shadow-md shadow-gray-400/20 rounded-md mb-4 xl:mb-0 xl:col-span-2 xl:mr-2 p-4 mt-7">
    <div className="px-4 py-2  w-full xl:mr-2 border-r-2 bg-gray-100/80">
        <span className="text-gray-500 text-sm md:text-lg font-semibold flex items-center gap-2"> Cheapest </span>
        <h2 className="text-gray-500  text-[15px]">To get the cheapest available flights </h2>
        
    </div>
    <div className="px-4 py-2  w-full xl:mr-2 flex flex-col justify-around">
        <span className="text-gray-500 text-sm md:text-lg font-semibold flex items-center gap-2"> Shortest</span>
        <h2 className="text-gray-500  text-[15px]">To get the cheapest available flights </h2>
    </div>
    </div>

    {/* flight details cards  */}
    <section className="mt-5 flex flex-col gap-6"> 
        <FlightDetailsCard/>
        <FlightDetailsCard/>
        <FlightDetailsCard/>
        <FlightDetailsCard/>
    </section>

    {/* pagination  */}
    <Pagination pageArray={[1, 2]} currentPage={1} />
    

        </div>
    </section>
  )
}
