import { GoCircle } from "react-icons/go";
import { FaDotCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { LuArrowRightLeft } from "react-icons/lu";
import { LuArrowUpDown } from "react-icons/lu";
import { MdVerifiedUser } from "react-icons/md";

export default function ChooseTrip() {

  return (
    <div>

    {/* Roadmap section  */}
    <div className="px-4 py-2 border border-gray-300 rounded-xl  mb-4 xl:mb-0 bg-gray-100 flex justify-between gap-2 items-center lg:hidden">
        <div>
        <h2 className="text-gray-600 font-bold text-md"> Dhaka - Chittagong</h2>
        <span className="text-gray-400 font-semibold text-sm"> 14 January | 1 Adult | Economy</span>  </div>
        <div>
        <h4 className="text-red-500 font-bold flex flex-col text-xs items-center gap-2"> <FiEdit /> Modify</h4> 
        </div>
    </div>

    {/* Main section  */}

        <section className="bg-white shadow-xl shadow-indigo-400/10 px-6 py-8 rounded-xl border border-indigo-700/10 border-t-indigo-700/5 relative">

{/* select trip boxes */}
<div className="flex gap-3 mb-4">
    <h4 className="text-slate-500 text-sm md:text-base font-semibold flex items-center gap-2"> <FaDotCircle className="text-red-500"/> One Way</h4>
    <h4 className="text-slate-500 text-sm md:text-base font-semibold flex items-center gap-2"> <GoCircle/> Round Tip</h4>
    <h4 className="text-slate-500 text-sm md:text-base font-semibold flex items-center gap-2"> <GoCircle/> Multi City</h4>
</div>



<div className="grid xl:grid-cols-5">
     <div className="px-4 py-2 border rounded-xl  mb-4 xl:mb-0">
        <span className="text-gray-500 text-sm"> From</span>
        <h2 className="text-gray-500 font-semibold text-[22px]"> Dhaka</h2>
        <p className="text-gray-500 text-xs"> Hazrat Shahjalal Internatinal Airport</p>
    </div>

     <div className="relative px-4 py-2 xl:pl-9 border rounded-xl mb-4 xl:mb-0 xl:mr-2">
        <span className="text-gray-500 text-sm"> To</span>
        <h2 className="text-gray-500 font-semibold text-[22px]"> Chittagong</h2>
        <p className="text-gray-500 text-xs"> Shah Amanat Internatinal</p>

        {/* exchange destination button  */}
        {/* for smaller to large screen */}
        <button className="xl:hidden bg-white hover:bg-red-500 transition-all hover:text-white hover:border-gray-300 p-3 xl:p-2 rounded-full text-red-500 border shadow-xl absolute right-5 -top-8"> <LuArrowUpDown size={23} className='xl:hidden' /> </button>

        {/* for extra large screen : xl  */}
        <button className="hidden xl:block bg-white hover:bg-red-500 transition-all hover:text-white hover:border-gray-300 p-3 xl:p-2 rounded-full text-red-500 border shadow-xl absolute -left-6 top-[27%]"> <LuArrowRightLeft className="hidden xl:block" size={23} /> </button>
    </div>
    
    {/* two sub section in one box */}
    <div className="flex border rounded-xl mb-4 xl:mb-0 xl:col-span-2 xl:mr-2">
    <div className="px-4 py-2  w-full xl:mr-2 border-r">
        <span className="text-gray-500 text-sm flex items-center gap-2"> Departure <IoIosArrowDown size={21} /></span>
        <h2 className="text-gray-500 font-semibold text-[22px]">14 <span className="text-[17px]"> Jan 24</span></h2>
        <p className="text-gray-500 text-xs"> Sunday</p>
    </div>
    <div className="px-4 py-2  w-full xl:mr-2 flex flex-col justify-around">
        <span className="text-gray-500 text-sm flex items-center gap-2"> Return <IoIosArrowDown size={21} /></span>
        <p className="text-gray-500 text-xs"> Tap to book return ticket</p>
        <p className="text-gray-500 text-xs"> for more savings</p>
    </div>
    </div>

     <div className="px-4 py-2 border rounded-xl ">
        <span className="text-gray-500 text-sm"> Travelers & Booking Class</span>
        <h2 className="text-gray-500 font-semibold text-[22px]">1 Traveler</h2>
        <p className="text-gray-500 text-xs"> Economy</p>
    </div>
</div>



<div className="xl:hidden">
<button className="btn font-semibold w-full bg-red-600 text-white px-6 py-2 mt-4 rounded-md text-md hover:bg-red-700"> Search</button>
</div>

<div className="flex gap-2 items-center mt-4">
    <h3 className="text-slate-900 font-semibold text-sm md:text-base"> Fare Type : </h3>
    <button className="bg-red-100/60 rounded-md px-3 py-2 text-xs md:text-[15px] flex items-center gap-1 md:gap-2 whitespace-nowrap"> <MdVerifiedUser size={18} className="text-red-600" /> Regular Fares</button>
    <button className="bg-red-100/60 rounded-md px-3 py-2 text-xs md:text-[15px] flex items-center gap-1 md:gap-2 whitespace-nowrap"> <GoCircle/> Seaman Fares</button>
</div>


<div className="hidden xl:block absolute left-[42%] mt-2">
<button className="btn font-semibold bg-red-600 text-white px-6 py-3 rounded-md text-md hover:bg-red-700"> Modify Search</button>
</div>


</section>
    </div>
  )
}
