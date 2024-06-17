'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter()
  const handleRegister =async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name,email, password };

    // posting on users collection 
    const res = await fetch('http://localhost:3000/signUp/api',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
    console.log(res);
   if(res.status===200){
    e.target.reset()
    Router.push('/signin')
   }
  };
  return (
    <div>
      <div className="hero my-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <Image width={600} height={600} sizes="100vw" src="/assets/images/login/login.svg" className=" w-full" alt="register" />
          </div>
          <div className="card shrink-0 w-1/2  border p-10">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-2xl font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error btn-outline">Register</button>
              </div>
            </form>
            <p className=" py-5 font-bold text-center text-lg">
              {" "}
              Already Have an Account{" "}
              <Link href={"/signin"} className=" font-bold text-blue-600">
                Login
              </Link>{" "}
              !!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;