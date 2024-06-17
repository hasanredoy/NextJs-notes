import Image from 'next/image';
import slide1 from '../../../../public/assets/images/banner/1.jpg'
import slide2 from '../../../../public/assets/images/banner/2.jpg'
import slide3 from '../../../../public/assets/images/banner/3.jpg'
import slide4 from '../../../../public/assets/images/banner/4.jpg'


const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
        width={'100%'}
        height={600}
          src={slide1}
          className="w-full"
          alt='banner'
        />
        <div className=' absolute flex items-center pl-5 h-full text-white w-full  bg-gradient-to-r from-[#030303eb] to-[#1d050539]'>
         <div className=' space-y-5 '>
         <h1 className=' text-5xl  font-bold max-w-[400px]'> Affordable Price
         <br /> For Car Servicing </h1>
          <p className=' max-w-96'>Hi We&apos;re Car&apos;s Doctor and we are providing you a Affordable Car checkup In Our Garage  </p>

          <button className="btn bg-[#FF3811] text-white border-none mr-4">Discover More</button>
          <button className="btn btn-outline btn-secondary  ">Lowest Price</button>
         </div>
        </div>
        <div className="absolute flex justify-between transform bottom-5 right-5 gap-5">
          <a href="#slide4" className="btn btn-circle bg-red-400">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-red-400">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <Image
      width={'100%'}
      height={600}
          src={slide2}
          alt='banner'

          className="w-full"
        />
        <div className=' absolute flex items-center pl-5 h-full text-white w-full  bg-gradient-to-r from-[#030303ef] to-[#1d050539]'>
         <div className=' space-y-5 '>
         <h1 className=' text-5xl  font-bold max-w-[400px]'> Affordable Price
         <br /> For Car Servicing </h1>
          <p className=' max-w-96'>Hi We&apos;re Car&apos;s Doctor and we are providing you a Affordable Car checkup In Our Garage  </p>

          <button className="btn bg-[#FF3811] text-white border-none mr-4">Discover More</button>
          <button className="btn btn-outline btn-secondary  ">Lowest Price</button>
         </div>
        </div>
        <div className="absolute flex justify-between transform bottom-5 right-5 gap-5">
          <a href="#slide1" className="btn btn-circle bg-red-400">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-red-400">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
       <Image
       width={'100%'}
       height={600}
          src={slide3}
          alt='banner'

          className="w-full"
        />
        <div className=' absolute flex items-center pl-5 h-full text-white w-full  bg-gradient-to-r from-[#030303eb] via-[#070707b3] to-[#f1e2e200]'>
         <div className=' space-y-5 '>
         <h1 className=' text-7xl font-black'> Affordable Price
         <br /> For Car Servicing </h1>
          <p className=' max-w-96'>Hi We&apos;re Car&apos;s Doctor and we are providing you a Affordable Car checkup In Our Garage  </p>

          <button className="btn bg-[#FF3811] text-white border-none mr-4">Discover More</button>
          <button className="btn btn-outline btn-secondary  ">Lowest Price</button>
         </div>
        </div>
        <div className="absolute flex justify-between transform bottom-5 right-5 gap-5">
          <a href="#slide2" className="btn btn-circle bg-red-400">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-red-400">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <Image
      width={'100%'}
      height={600}
          src={slide4}
          alt='banner'

          className="w-full"
        />
        <div className=' absolute flex items-center pl-5 h-full text-white w-full  bg-gradient-to-r from-[#030303e6] to-[#1d050539]'>
         <div className=' space-y-5 '>
         <h1 className=' text-5xl  font-bold max-w-[400px]'> Affordable Price
         <br /> For Car Servicing </h1>
          <p className=' max-w-96'>Hi We&apos;re Car&apos;s Doctor and we are providing you a Affordable Car checkup In Our Garage  </p>

          <button className="btn bg-[#FF3811] text-white border-none mr-4">Discover More</button>
          <button className="btn btn-outline btn-secondary  ">Lowest Price</button>
         </div>
        </div>
        <div className="absolute flex justify-between transform bottom-5 right-5 gap-5">
          <a href="#slide3" className="btn btn-circle bg-red-400">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-red-400">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
