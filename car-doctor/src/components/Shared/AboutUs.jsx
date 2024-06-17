import Image from "next/image";
import about1 from "../../../public/assets/images/about_us/parts.jpg";
import about2 from "../../../public/assets/images/about_us/person.jpg";
const AboutUs = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">

         <h1 className=" text-[#FF3811] font-bold text-xl"> About Us</h1>
          <h2 className="text-5xl w-[80%]  font-bold">We are qualified & of experience in this field</h2>
          <p className="py-3">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. 
          </p>
          <p className="mt-3">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. 
          </p>

          <button className="btn my-3 bg-[#FF3811] text-white">Get More Info</button>
        </div>
        <div className=" shrink-0 w-[45%] ">
          <div className=" relative">
            <Image alt={'about-us'} width={480} height={473} className=" w-[480px] h-[473px]" src={about1} />
            <Image alt={'about-us'} width={300} height={300} className=" border-[7px] border-white w-[300px] h-[300px] right-5 absolute -bottom-6" src={about2}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
