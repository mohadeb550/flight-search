
import Timer from "./Timer";
import { BsSunriseFill } from "react-icons/bs";


export default function OnewayTipLeft() {
  return (
    <div className="border border-gray-400/10 rounded-xl bg-white shadow-md shadow-gray-400/20">

      <div className="p-5 flex flex-col items-center justify-center border-b">
      <h4 className="text-gray-600 text-sm md:text-lg font-medium flex items-center gap-2"> Session Timeout in </h4>
      <Timer />
      </div>

      <div className="p-5 space-y-2 border-b">
      <h4 className="text-gray-600 text-sm md:text-lg font-medium mb-2"> One Way Price </h4>
     <input type="range" min={0} max="100"  className="range range-error range-xs" />
     <h4 className="text-lg text-black/80 font-medium"> 3,954 tk - 4,139 tk</h4>
      </div>


      <div className="px-5 py-6 space-y-2 border-b">
      <h4 className="text-gray-600 text-sm md:text-lg font-medium mb-2">Departure time in Dhaka </h4>
      <div className="border border-gray-500 rounded-lg h-20 w-36 flex flex-col items-center justify-center gap-[1px]">
        <BsSunriseFill size={26} />
        <span className="text-gray-700 font-semibold text-sm ">Evening </span>
        <span className="text-gray-500 text-xs ">18:00 - 23:59(1) </span>
      </div>
      </div>


      <div className="p-5 space-y-2 border-b">
      <h4 className="text-gray-600 text-sm md:text-lg font-medium mb-3">Stops From Dhaka </h4>

     <div className="flex items-center justify-between">
     <div className="flex items-center gap-2"><input type="checkbox" className="accent-red-500" />
     <span className="text-[15px] text-gray-600"> Non Stop(1)</span></div>
     <span className="text-[15px] text-gray-600"> BDT 3,954</span>
    
     </div>
      </div>


      <div className="p-5 space-y-2 border-b">
      <h4 className="text-gray-600 text-sm md:text-lg font-medium mb-3">Check in Baggage Allowance</h4>
      
     <div className="flex items-center gap-2"><input type="checkbox" className="accent-red-500"/>
     <span className="text-[15px] text-gray-600">20 KG(1)</span></div>
      </div>


      <div className="p-5 space-y-2 border-b">
      <h4 className="text-gray-600 text-sm md:text-lg font-medium mb-3">Refundable</h4>
      
     <div className="flex items-center gap-2"><input type="checkbox" className="accent-red-500"/>
     <span className="text-[15px] text-gray-600">Partially Refundable(1)</span></div>
      </div>


      <div className="p-5 border-b flex items-center gap-16">
      <div>
      <h4 className="text-gray-600 text-sm md:text-[16px] font-medium mb-3">Departing from</h4>
      <span className="text-[15px] text-gray-600 flex items-center gap-2"> <input type="checkbox" className="accent-red-500"/>DAC</span>
      </div>
      <div>
      <h4 className="text-gray-600 text-sm md:text-[16px] font-medium mb-3">Arriving at</h4>
      <span className="text-[15px] text-gray-600 flex items-center gap-2"> <input type="checkbox" className="accent-red-500"/> CGP</span>
      </div>
      </div>


      <div className="px-5 py-6 space-y-2 border-b">
      <h4 className="text-gray-600 text-sm md:text-lg font-medium mb-3">Airlines </h4>

     <div className="flex items-center justify-between">
     <div className="flex items-center gap-2"><input type="checkbox" className="accent-red-500"/>
     <span className="text-[15px] text-gray-600">Air Astra</span></div>
     <span className="text-[15px] text-gray-600"> BDT 3,954</span>
     </div>
      </div>


      <div className="p-5 space-y-2">
      <h4 className="text-gray-600 text-sm md:text-lg font-medium mb-4">Transit Time in (Dhaka - Chittagong)</h4>
      
     <div className="flex items-center gap-2"><input type="checkbox" className="accent-red-500"/>
     <span className="text-[15px] text-gray-600">No Transit Time (1)</span></div>
      </div>

      {/* clear button  */}
      <div className="p-5">
        <button className="btn font-semibold bg-transparent border border-red-500 text-red-600 w-full transition-all hover:text-white px-6 py-2 mt-3 rounded-md text-lg hover:bg-red-600"> Clear Filters</button>
        </div>
      

    </div>
  )
}
