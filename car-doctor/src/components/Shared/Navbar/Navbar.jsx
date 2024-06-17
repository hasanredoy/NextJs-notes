"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from '../../../../public/assets/logo.svg';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { signOut, useSession } from "next-auth/react";


const Navbar = () => {
  const pathName = usePathname()
  const session = useSession()
  // console.log(session);
  const links =[
    {
      title:"Home",
      path:"/"
    },
    {
      title:"About",
      path:"/about"
    },
    {
      title:"Services",
      path:"/services"
    },
    {
      title:"Blog",
      path:"/blog"
    },
    {
      title:"Contact",
      path:"/contact"
    },
    {
      title:"My Booking",
      path:"/my-booking"
    },
  ]
  return (
    <div className="bg-base-200 ">
      <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {
          links.map((link,index)=><Link className={` font-bold hover:text-primary duration-300 ${link.path===pathName&&'text-primary'} `} key={index} href={link.path}>{link?.title}</Link>)
         }
      </ul>
    </div>
   <Link href={'/'}>
   <Image  src={logo} width={80} height={50} alt="logo"/>
   </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-x-5 ">
    {
          links.map((link,index)=><Link className={` font-bold hover:text-primary duration-300 text-lg ${link.path===pathName&&'text-primary'} `} key={index} href={link.path}>{link?.title}</Link>)
         }
    </ul>
  </div>
  <div className="navbar-end">
   <div className=" flex gap-5 mr-5">
   <Link href={'/'} className=" text-2xl">
    <HiOutlineShoppingBag></HiOutlineShoppingBag>
    </Link>
    <Link href={'/'} className=" text-2xl">
    <HiMagnifyingGlass></HiMagnifyingGlass>
    </Link>
    
   </div>
    <button className=" btn btn-outline btn-primary">Appointment</button>
    {
      session.status==='loading'&& <span>Loading...</span>
    }
    {
      session.data?.user?
      <button className=" ml-3 btn btn-primary" onClick={()=>signOut()}>LogOut</button>
      :<Link href={'/signin'} className=" ml-3 btn btn-primary">
      SignIn
      </Link>
    }
  </div>
</div>
    </div>
  );
};

export default Navbar;