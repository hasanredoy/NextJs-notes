"use client"

import { useEffect, useState } from "react";

const page = ({params}) => {
  const [service , setService ]=useState()
  const loadSingleData=async()=>{
   const singleService = await fetch(`http://localhost:3000/my-booking/api/booking-methods/${params.id}`)
   const data = await singleService.json()
   setService(data?.getBooking)

  }
  useEffect(()=>{
    loadSingleData()
  },[params.id])
  console.log(service);

  const handleUpdate = async (e)=>{
    e.preventDefault()
    const date = e.target.date.value
    const update = {
      date
    }
    const updateService = await fetch(`http://localhost:3000/my-booking/api/booking-methods/${service._id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(update)
    })
    console.log(updateService);
  }

  return (
    <div className="card shrink-0 w-full  border p-10 my-10">
        <form onSubmit={handleUpdate} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="form-control">
              <label className="label">
                <span className="text-2xl font-bold">Name</span>
              </label>
              <input
                type="text"
                defaultValue={service?.name}
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
                defaultValue={service?.date}
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
                defaultValue={service?.email}
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
                defaultValue={"$" + service?.price}
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
  );
};

export default page;