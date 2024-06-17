"use client"

import { getSingleService } from '@/services/getService';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const page =({params}) => {
  const {data}=useSession()
  const [service , setService]=useState({})
  const loadService  = async ()=>{
    const singleService =await getSingleService(params.id)
     setService(singleService)
     console.log({singleService});
  }
  useEffect(()=>{
    loadService()
  },[params.id])
  console.log(service);
  const handlePost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const checkout = {
      name,
      date,
      service: service?.title,
      service_id: service?._id,
      image: service?.img,
      price: service?.price,
      email:data.user?.email,
       title: service?.title,
       serviceId: service?._id,
       price: service?.price

    };
    // console.log(checkout);
    const res = await fetch('http://localhost:3000/checkout/api/new-booking',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(checkout)
    })
    console.log(res);
    
  };
  return (
    <div>
      <div className="card shrink-0 w-full  border p-10 my-10">
        <form onSubmit={handlePost} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="form-control">
              <label className="label">
                <span className="text-2xl font-bold">Name</span>
              </label>
              <input
                type="text"
                defaultValue={data?.user?.name}
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-2xl font-bold">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                required
                name="date"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-2xl font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={data?.user?.email}
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-2xl font-bold">Amount to Pay</span>
              </label>
              <input
                type="text"
                readOnly
                defaultValue={"$" + service.price}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6 col-span-2">
              <button className="btn btn-block btn-error btn-outline ">
               Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

};

export default page;