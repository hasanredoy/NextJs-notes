import { getSingleService } from "@/services/getService";
import Link from "next/link";
export const metadata = {
  title:'Service Details',
  description:'car service details'
}



const ServiceDetailsPage = async ({params}) => {
  // console.log(params.id);
  const service =await getSingleService(params.id)
  // console.log(service);

  return (
    <div>
      <h1 className=" text-2xl">Price : {service?.price}</h1>
    <Link href={`/checkout/details/${service?._id}`}>
    <button className="btn btn-primary ">Checkout</button>

    </Link>
    
    </div>
  );
};

export default ServiceDetailsPage;