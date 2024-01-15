

export default function Header() {
  return (
    <header className=" h-24 lg:h-28 mx-auto flex justify-between items-center">
    <a href="/"> <img className="w-48 md:w-52" src="/fe-logo.712b9c71.svg"/></a>
    <button className="btn bg-red-600 text-white px-6 py-3 rounded-md text-md hover:bg-red-700"> Sign In</button>
  
</header>
  )
}
