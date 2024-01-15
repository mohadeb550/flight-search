import { IoIosArrowDown } from "react-icons/io";


export default function FlightDetailsCard() {
  return (
    <div className="border border-gray-400/10 rounded-md bg-white shadow-md shadow-gray-400/20 p-5">
        <section className="flex gap-10 justify-between flex-wrap">

        <div>
            <img src="/VQ.png" className="w-20 rounded-full" />
            <span className="text-gray-500 text-sm  flex items-center gap-2"> Biman Bangladesh <br/>Airlines </span>
        </div>

        <div className="space-y-2">
        <span className="text-gray-500 text-sm  flex items-center gap-2"> Depart </span>
        <div className="space-y-1">
        <time className="text-lg text-black/80 font-medium"> 18:35</time>
        <span className="text-gray-600 text-sm font-medium flex items-center gap-2">Sun, 14 Jan 2024 </span>
        </div>
        <h2 className="text-[15px]">Dhaka (DAC)</h2>
        </div>

        <div className="flex items-center justify-center flex-col">
        <span className="text-gray-500 text-sm  flex items-center gap-2">45 minutes </span>
            <img src="/pngegg (9).png" className="w-20" />
            <span className="text-sm text-gray-700"> Non Stop</span>
        </div>

        <div className="space-y-2">
        <span className="text-gray-500 text-sm  flex items-center gap-2">Arrive </span>
        <div className="space-y-1">
        <time className="text-lg text-black/80 font-medium"> 19:20</time>
        <span className="text-gray-600 text-sm font-medium flex items-center gap-2">Sun, 14 Jan 2024 </span>
        </div>
        <h2 className="text-[15px]">Chittagong(CGP)</h2>
        </div>

        <div>
        <span className="text-gray-500 text-sm  flex items-center gap-2">Price </span>
        <p className="text-lg text-black/80 font-medium">BDT 3,193</p>
        </div>

        <div className="">
        <button className="btn font-semibold bg-red-600 text-white px-6 py-3 rounded-md text-md hover:bg-red-700"> Book Now</button>
        </div>

        </section>

    <div className="flex justify-between gap-2 mt-5 xl:mt-0 items-center">
    <h4 className="text-green-700 font-semibold text-sm"> Partially Refundable </h4>
    <span className="text-red-500 font-semibold text-lg flex items-center gap-3"> Flight Details <IoIosArrowDown size={21} /></span>
    </div>
    </div>
  )
}
