import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
{
  /*import Image from "next/image";*/
}

const Hero = () => {
  return (
    <div className="h-[100vh] bg-[url('/images/peak2.jpg')] mt-[5vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] text-center flex justify-center pb-[400px] grid-cols-1 mx-auto lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[70px] md:text-[70px]  text-white font-bold">
            E<span className="text-green-600">S</span>BE
            <span className="text-green-600">X</span>{" "}
          </h1>
          <h3 className=" text-[45px] md::text-[45px] text-orange-600">
            SAFETY WITH PERFECTION
          </h3>
          <TextEffect />
        </div>
        {/* for  image at web portofolio */}
        {/*<div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/4.jpeg"
            alt="photo"
            layout="fill"
            className="object-cover rounded-full"
          />
  </div>*/}
      </div>
    </div>
  );
};

export default Hero;
