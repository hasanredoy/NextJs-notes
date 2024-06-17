"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const MyBookingPage = () => {
  const session =useSession()
  const [booking , setBooking]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:3000/my-booking/api/${session?.data?.user?.email}`)
    .then(res => res.json())
    .then(data=>{
      console.log(data);
      setBooking(data)
    })
  },[session?.data?.user?.email])
  return (
    <div className="text-black overflow-x-auto mx-auto my-10 rounded-md bg-gray-300">
       
    <table className="table">
      {/* head */}
      <thead className=" text-white  bg-[#039625]">
        <tr>
          <th></th>
          <th className=" text-base lg:text-xl font-medium lg:font-bold">Image</th>
          <th className=" text-base lg:text-xl font-medium lg:font-bold">Name</th>
          <th className=" text-base lg:text-xl font-medium lg:font-bold">Email</th>
          <th className=" text-base lg:text-xl font-medium lg:font-bold">Role</th>
          
        </tr>
      </thead>
      <tbody>
        {booking?.map((singleBooking, index) => (
          <tr key={singleBooking._id}>
            <th>{index + 1}</th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="  w-16 h-16">
                    <img src={singleBooking?.image} />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <span className="  text-base font-medium lg:font-bold">
                {singleBooking?.name?singleBooking?.name:'Anonymous'}
              </span>
            </td>
            <td>
            <span className="  text-base font-medium lg:font-bold">
                {singleBooking?.email?singleBooking?.email:'Not Found'}
              </span>
            </td>
            <th>
             <div className=' flex gap-3'>
             <button
             className=" btn bg-[#04630a] text-white border-l-4 border-b-4 border-[#2efed8]">
                 edit
                </button>
             <button
             className=" btn btn-primary">
                 delete
                </button>
             </div>
             </th>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default MyBookingPage;