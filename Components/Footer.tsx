import React from "react";
import { MapIcon } from "@heroicons/react/20/solid";
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-500 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white] uppercase">
              address
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Jakarta-Bandung-Cirebon, Indonesia
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white] uppercase">
              Contact Number
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              +62 812-9704-9257{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white] uppercase">
              Email us
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              esbeks@yahoo.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
