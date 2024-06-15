"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const session = useSession()
  console.log('seeion from navbar',session);
  const links = [
    {
    title:"Posts",
    path:'/posts'
  },
    {
    title:"Meals",
    path:'/meals'
  },
]
  return (
    <div className=" flex justify-between px-20 py-3 bg-slate-100">
      <h1 className=" text-xl font-bold">Next <span className=" text-green-600">JS</span></h1>
      <ul>
        {
          links.map((link)=><Link key={link.path} href={link.path}>{link.title}</Link>)
        }
      </ul>
     
      <div>
        {
          session.status==='authenticated'?
          <div className=" flex items-center gap-5">
          <h5>{session?.data?.user?.name}</h5>
          <div >
          <Image width={40} height={40} className=" w-10 h-10 rounded-full" src={session?.data?.user?.image} alt={session?.data?.user?.name}/>
          </div>
          <button onClick={()=>signOut()} className=" p-2 bg-slate-700 font-bold text-white">Logout</button>
        </div>
          :<>
          <Link  href={'/api/auth/signup'} className=" mr-3 p-2 bg-slate-700 font-bold text-white">Sign Up</Link >
          <Link  href={'/api/auth/signin'} className=" p-2 bg-slate-700 font-bold text-white">LogIn</Link >
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;