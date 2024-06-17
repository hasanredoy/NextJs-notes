"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDollarSign, FaArrowAltCircleRight } from "react-icons/fa";


const Services = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000/services/api/get-services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div className=" my-20">
      <div>
        <h1 className=" text-[#FF3811] font-bold text-center text-lg">
          {" "}
          Services{" "}
        </h1>
        <h2 className=" font-bold text-4xl text-center"> Our Services</h2>
      </div>
      <div className=" grid grid-cols-3 gap-8 border p-5">
        {services?.map((service) => (
          <div key={service._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
              height={250}
              width={250}
              className=" h-[250px]"
                src={service?.img}
                alt="services"
              />
            </figure>
            <div className="card-body space-y-3">
              <h2 className=" text-2xl font-bold ">
            {service.title}
              </h2>
             
              <div className="card-actions justify-between ">
                <div className="flex gap-3 text-xl text-[#FF3811]">Price: <span className=" flex items-center font-bold text-xl"><FaDollarSign></FaDollarSign>{service?.price} </span></div>
                <Link href={`/services/${service?._id}`}>
                <div className="text-2xl  text-[#FF3811]"><FaArrowAltCircleRight></FaArrowAltCircleRight></div></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
