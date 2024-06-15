'use client'
import React from "react";

const signUpPage = () => {

const handleRegister =async (event)=>{
  event.preventDefault()
  const name = event.target.name.value;
  const photo = event.target.photo.value;
  const type = event.target.type.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const newUser={
    name,
    image:photo,
    type,
    email,
    password
  }
  console.log(newUser);
  const response = await fetch('http://localhost:3000/api/auth/signup/new-users',{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(newUser),
  })
}

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" border bg-slate-100 w-full max-w-md p-8 space-y-3 rounded-xl ">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Username
            </label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-700 "
            />
          </div>
          <div className="space-y-1 text-sm">
            <label  className="block ">
              Photo
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Photo Url"
              className="w-full px-4 py-3 rounded-md border-gray-700 "
            />
          </div>
          <div className="space-y-1 text-sm">
            <label  className="block ">
              User Type
            </label>
           <select name="type" id="">
            <option value="member">Member</option>
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
           </select>
          </div>
          <div className="space-y-1 text-sm">
            <label  className="block ">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="User Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 "
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700  "
            />
           
          </div>
          <button type="submit" className="block w-full p-3 text-center rounded-sm border bg-gray-400 text-gray-900 ">
            Sign Up
          </button>
        </form>
       
        
      </div>
    </div>
  );
};

export default signUpPage;
