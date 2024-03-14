import React from "react";
import Image from "next/image";

const OurProducts = () => {
  return (
    <div className="h-[100%] bg-[url('/images/b2.jpg')] pb-8 bg-cover bg-center">
      <h1 className="heading text-orange-500">Example From Our Product</h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/W1.jpeg"
            alt="product"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/W2.jpeg"
            alt="product"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/W5.jpeg"
            alt="product"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/wearpack1.jpeg"
            alt="product"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/26.jpeg"
            alt="product"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/p10.jpeg"
            alt="product"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
