import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Brands from "./Brands";

export default function Footer() {
    
  return (
    <div className="mt-36">
        <section className="grid grid-cols-12 gap-8 pb-8">

            <div className="space-y-5 col-span-12 md:col-span-4 lg:col-span-5 xl:col-span-3">
            <a href="/"> <img className="w-48 md:w-52" src="/fe-logo.712b9c71.svg"/></a>
            <p className="text-red-500 text-sm">Flight Expert Dhaka (Main branch)<br/> 90/1 Motijheel City Centre Level 25-B-1,<br/> Lift 26 Dhaka 1000, Bangladesh</p>

            <div className="flex gap-4 text-red-600 text-2xl">
            <FaFacebookF/>
            <FaInstagram/>
            <FaXTwitter/>
            <FaLinkedinIn/>
            <FaPinterestP/>
            </div>
            </div>


            <div className="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2">
            <h2 className="text-gray-600 font-semibold text-xl mb-5">About</h2>

            <div className="flex flex-col gap-3 text-slate-700/70 ">
            <span className="font-medium hover:text-red-600 cursor-pointer">About Flight Expert</span>
            <span className="font-medium hover:text-red-600 cursor-pointer">Best Price Guarantee</span>
            <span className="font-medium hover:text-red-600 cursor-pointer">Terms and Conditions</span>
            <span className="font-medium hover:text-red-600 cursor-pointer">Privacy Policy</span>
            <span className="font-medium hover:text-red-600 cursor-pointer">Cookie Policy</span>
            <span className="font-medium hover:text-red-600 cursor-pointer">Blog</span>
            </div>
            </div>


            <div className= "col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2">
            <h2 className="text-gray-600 font-semibold text-xl mb-5">Help</h2>

            <div className="flex flex-col gap-3 text-slate-700/70 ">
            <span className="font-medium hover:text-red-600 cursor-pointer">FAQS</span>
            <span className="font-medium hover:text-red-600 cursor-pointer">Easy EMI Guarantee</span>
            <span className="font-medium hover:text-red-600 cursor-pointer">Payment Methods</span>
            <span className="font-medium hover:text-red-600 cursor-pointer">Contact Us</span>
           
            </div>
            </div>


            <div className=" col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-2">
            <h2 className="text-gray-600 font-semibold text-xl mb-5">Have Questions?</h2>

            <div className="flex flex-col gap-2">
            <span className=" text-red-600 text-lg cursor-pointer">+88-09617-111-888</span>
            <span className=" text-red-600 text-lg cursor-pointer">sales@flightexpert.com</span>
            <span className="font-medium text-[15px]  cursor-pointer">Dedicated Customer Support</span>
            <span className="text-xs  cursor-pointer">Sat-Thurs: 9AM-9PM <br/>
Friday/Govt. Holidays: 10AM-6PM</span>
           
            </div>
            </div>


            <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-3 md:px-24 md:py-5 xl:p-0">
            <h2 className="text-gray-600 font-semibold text-xl mb-5">Accepted Payments</h2>
                <img src="/bank-logo.a775fd7b.webp" className=" lg:w-full xl:w-80"/>
            </div>


        </section>
        {/* Brands Banner  */}
        <Brands/>

        <div className="text-center py-10"> <h2 className="text-gray-500 font-semibold text-md mb-3">Copyright @2024 FEBD Ltd. All rights reserved by Flight Expert</h2></div>
    </div>
  )
}
