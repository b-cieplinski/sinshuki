import { useState } from "react";
import { SearchIcon, ShoppingBagIcon, UserIcon, DotsHorizontalIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"


const linkList = [
  {
    title: "",
    category: "NewYork",
    active: true,
  },
  {
    title: "",
    category: "NewYork",
    active: true,
  },
  {
    title: "",
    category: "NewYork",
    active: true,
  },
  {
    title: "",
    category: "NewYork",
    active: true,
  },
  {
    title: "",
    category: "NewYork",
    active: true,
  },  
  {
    title: "",
    category: "NewYork",
    active: true,
  },
];

const Header = () => {
  const {data: session} = useSession();
  const router = useRouter()
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white border-b-2 py-4 px-5 md:px-10 border-black">
<Link href="/" passHref>
    <div className="flex items-center mx-auto justify-start italic hover:bg-black hover:text-white hover:font-normal px-6 py-0 cursor-pointer text-lg">
        SINSHUKI
    </div>
</Link>
    <div className="flex items-center justify-center space-x-4">
    <Link href="/indoor" passHref>
        <div className=" px-6 py-2 font-thin hover:bg-black hover:text-white hover:font-normal cursor-pointer  hidden sm:hidden md:inline lg:inline xl:inline">Indoor</div>
        </Link>
        <Link href="/outdoor" passHref>
        <div className=" px-6 py-2 font-thin hover:bg-black hover:text-white hover:font-normal cursor-pointer  hidden sm:hidden md:inline lg:inline xl:inline">Outdoor</div>
        </Link>
        <Link href="/pots" passHref>
        <div className=" px-6 py-2 font-thin hover:bg-black hover:text-white hover:font-normal cursor-pointer  hidden sm:hidden md:inline lg:inline xl:inline">Pots</div>
        </Link>
        <Link href="/seeds" passHref>
        <div className=" px-6 py-2 font-thin hover:bg-black hover:text-white hover:font-normal cursor-pointer  hidden sm:hidden md:hidden lg:hidden xl:inline">Seeds</div>
        </Link>
        <Link href="/accessories" passHref>
        <div className=" px-6 py-2 font-thin hover:bg-black hover:text-white hover:font-normal cursor-pointer  hidden sm:hidden md:hidden lg:hidden xl:inline">
        Accessories
        </div>
        </Link>
        <Link href="/sales" passHref>
        <div className=" px-6 py-2 font-thin hover:bg-black hover:text-white hover:font-normal cursor-pointer hidden before:sm:hidden md:hidden lg:hidden xl:inline">Sale</div>
        </Link>



<div className="dropdown inline-block relative">
  <button className=" px-2 py-2  font-thin hover:bg-black hover:text-white hover:font-normal cursor-pointer hidden sm:hidden md:inline lg:inline xl:hidden">
    <span className=""><DotsHorizontalIcon className="h-6"/></span>
  </button>
  <ul className="dropdown-menu absolute hidden text-black border-2 border-black">
  <Link href="/seeds" passHref>
    <li className=""><a className=" bg-white hover:bg-black hover:text-white py-2 px-4 block whitespace-no-wrap sm:display md:display" href="#">Seeds</a></li>
    </Link>
    <Link href="/accessories" passHref>
    <li className=""><a className="bg-white hover:bg-black hover:text-white py-2 px-4 block whitespace-no-wrap sm:display md:display" href="#">Accessories</a></li>
    </Link>
    <Link href="/sales" passHref>
    <li className=""><a className="bg-white hover:bg-black hover:text-white py-2 px-4 block whitespace-no-wrap sm:display md:display" href="#">Sale</a></li>
    </Link>
  </ul>
</div>








        {/* <div className="border-2 px-6 py-1 rounded-full font-thin hover:bg-black hover:text-white hover:font-normal cursor-pointer border-black sm:inline md:hidden lg:hidden">Menu</div> */}


        <>
      {showSidebar ? (
        <button
          className="flex text-xl text-white items-center cursor-pointer fixed right-5 mx-auto top-6 z-50 bg-black px-4 py-2"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          X
        </button>
      ) : (
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="px-6 py-1 font-thin hover:bg-black hover:text-white hover:font-normal cursor-pointer sm:inline md:hidden lg:hidden"
        > Menu </div>
      )}

      <div
        className={`top-0 right-0 w-full mx-auto bg-rose-50 border-4 border-black p-10 pr-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-y-0 " : "translate-y-full"
        }`}
      >
        <h3 className="mt-4 text-5xl font-bold text-black font-widest bg-contain bg-no-repeat bg-right">
          <li className="list-none"><button className="px-5 py-1 bg-black text-white mb-4" onClick={() => router.push("/indoor")}>Indoor</button></li>
          <li className="list-none"><button className="px-5 py-1 bg-black text-white my-4" onClick={() => router.push("/ondoor")}>Outdoor</button></li>
          <li className="list-none"><button className="px-5 py-1 bg-black text-white my-4" onClick={() => router.push("/pots")}>Pots</button></li>
          <li className="list-none"><button className="px-5 py-1 bg-black text-white my-4" onClick={() => router.push("/seeds")}>Seeds</button></li>
          <li className="list-none"><button className="px-5 py-1 bg-black text-white my-4" onClick={() => router.push("/accessories")}>Accessories</button></li>
          <li className="list-none"><button className="px-5 py-1 bg-black text-white my-4" onClick={() => router.push("/sales")}>Sales</button></li>
        </h3>
      </div>
    </>




    </div>

    <div className="flex items-center mx-auto justify-end space-x-2">
    <button className=" hover:bg-black hover:text-white hover:font-normalflex items-center space-x-2 border-2 p-2 rounded-full border-black">
        <SearchIcon className="h-4"/>
        </button>
        <Link href="/checkout" passHref>
        <button className=" hover:bg-black hover:text-white hover:font-normalflex items-center space-x-2 border-2 p-2 rounded-full border-black">
        <ShoppingBagIcon className="h-4"/>
        </button></Link>
  
       {session ? (
         <>
         <button onClick={() => router.push("/account")} className=" hover:bg-black hover:text-white hover:font-normalflex items-center space-x-2 border-2 rounded-full border-black">
        <img className="rounded-full h-8 w-8" src={session?.user?.image}/>
        </button>
        </>
       ) : (
        <>
         <button onClick={() => router.push("/auth/signin")} className=" hover:bg-black hover:text-white hover:font-normalflex items-center space-x-2 border-2 rounded-full border-black">
        <UserIcon className="h-4 m-2"/>
        </button>
        </>
       )}
         </div>
    </header>
  )
}

export default Header