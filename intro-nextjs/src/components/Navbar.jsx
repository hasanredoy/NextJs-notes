"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname()
  const router = useRouter()
  const links = [
    {
      title:"Home",
      path:'/'
    },
    {
      title:"Services",
      path:'/services'
    },
    {
      title:"Contact",
      path:'/contact'
    },
    {
      title:"About",
      path:'/about'
    },
    {
      title:"Blogs",
      path:'/blogs'
    },
    {
      title:"Categories",
      path:'/categories'
    },
    {
      title:"Dashboard",
      path:'/dashboard'
    },
  ]
  const handleLoginRouting=()=>{
    router.push('/about')
  }
  // console.log(pathName);
  if(pathName.includes('dashboard')){
    return <nav className=" w-full bg-green-300">
      <h1> dashboard</h1>
    </nav>
  }
  return (
    <div className=" px-20 py-3 flex justify-between bg-slate-200 ">
       <h1 className=" text-2xl font-bold">Next <span className=" text-green-600">Js</span></h1>
       <div>
        <ul className=" flex gap-5 ">
          {
            links?.map((link)=><Link className={`${pathName===link.path&&'text-green-400'} font-bold text-xl`} key={link.path} href={link.path}>{link.title}</Link>)
          }
        </ul>
       </div>
       <button onClick={handleLoginRouting} className=" p-2 bg-green-600 text-white font-bold">Login </button>
    </div>
  );
};

export default Navbar;