'use client'
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const GoogleLogin = () => {
  

  const handleSocialLogin = (providers) => {
    const res =signIn(providers,{redirect:false})
  };
  return (
    <>
      <div className=" flex justify-evenly my-5 ">
        <button
          onClick={()=>handleSocialLogin('google')}
          className=" flex gap-3 items-center text-lg font-bold hover:text-white hover:bg-green-400 px-4 py-2 rounded-lg bg-white text-green-600 border hover:border-0 border-green-700 "
        >
          Login With <FcGoogle className=" text-2xl"></FcGoogle>{" "}
        </button>
        <button
          onClick={()=>handleSocialLogin('github')}
          className=" flex gap-3 items-center text-lg font-bold hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg bg-white text-gray-600 border hover:border-0 border-gray-700 "
        >
          Login With <FaGithub className=" text-2xl"></FaGithub>{" "}
        </button>
      </div>

    </>
  );
};

export default GoogleLogin;
