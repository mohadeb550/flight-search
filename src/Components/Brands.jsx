
export default function Brands() {

  return (
    <div className="border-t border-b grid grid-cols-5 md:px-0 xl:px-24 py-6 gap-10 md:gap-0">

        <div className="flex flex-col justify-center items-center col-span-3 md:col-span-2">
        <h2 className="text-gray-500 font-semibold text-md mb-3">Accredited Member</h2>
        <div className="flex">
        <img src="/basis.webp" className="w-32 h-14 object-contain" />
        <img src="/e-cab.webp" className="w-16 h-14 object-contain" />
        </div>
        </div>

        <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
        <h2 className="text-gray-500 font-semibold text-md mb-3">Registered at</h2>
        <img src="/duns.webp" className="w-32 h-14 object-contain" />    
        </div>

        <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
        <h2 className="text-gray-500 font-semibold text-md mb-3">Authorised by</h2>
        <img src="/iata.webp" className="w-32 h-14 object-contain" />    
        </div>

        <div className="flex flex-col justify-center items-center col-span-3 md:col-span-1">
        <h2 className="text-gray-500 font-semibold text-md mb-3">Our Partners</h2>
        <img src="/google-logo.svg" className="w-48 h-16 object-contain" />    
        </div>

    </div>
  )
}
