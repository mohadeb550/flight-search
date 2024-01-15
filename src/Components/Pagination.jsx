import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function Pagination({pageArray, currentPage }) {


  return (

<div className="my-5 md:my-8">

	<nav aria-label="Page navigation example" className="flex justify-end items-center">
		<ul className="inline-flex ">
			<li
			className="bg-white border border-gray-300 text-gray-400 hover:bg-red-100 hover:text-gray-700 ml-0 rounded-l-md leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"> <IoIosArrowBack/>
			</li>
			
			{pageArray.map(page => <li key={page} className={` hover:opacity-90 border leading-tight py-2 px-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer ${currentPage === page && 'text-gray-200 bg-red-600 border-0'}`} > {page +1}
			</li> )}

			<li className="bg-white border border-gray-300 text-gray-400 hover:bg-red-100 hover:text-gray-700 rounded-r-md leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"> <IoIosArrowForward/>
			</li>
		</ul>
	</nav>

	
</div>
  )
}
