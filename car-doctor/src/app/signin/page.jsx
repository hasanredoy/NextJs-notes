"use client";

import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { signIn } from "next-auth/react";
import { FaClosedCaptioning } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import GoogleLogin from "@/components/Shared/GoogleLogin";

const SignInPage = () => {
  const router = useRouter()
    // const searchParams = useSearchParams()
    // const path = searchParams.get("redirect")
  const handleLogin =async (e) => {
  
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    
    // login user by next js 
    const res = await signIn("credentials", {
      email,
      password,
      redirect:true,
      // callbackUrl: path?path:"/"
    });
    console.log(res);
    if(res.status===200){
      router.push('/')
    }
  };
  return (
    <Suspense fallback={<div>Loading</div>}>
    <div>
      <div className="hero my-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <Image
              src="/assets/images/login/login.svg"
              className=" w-full"
              width={600}
              height={600}
              sizes="100vw"
              alt=" login"
            />
          </div>
          <div className="card shrink-0 w-1/2  border p-10">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-2xl font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-2xl font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <a href="#" className="text-xl font-bold-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary btn-outline">Login</button>
              </div>
            </form>
            <div>
              <GoogleLogin></GoogleLogin>
            </div>
            <p className=" py-5 font-bold text-center text-lg">
              {" "}
              New Here{" "}
              <Link href={"/signUp"} className=" font-bold text-blue-600">
                Register
              </Link>{" "}
              !!
            </p>
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  );
};

export default SignInPage;
