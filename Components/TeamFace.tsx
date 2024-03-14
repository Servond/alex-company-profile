import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  role: string;
  image: string;
}
const TeamFace = ({ name, role, image }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded-full"
      />
      <div className="flex items-center mx-auto">
        {/* star icon */}
        {/* <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" */}
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">
        {role}
      </p>
    </div>
  );
};

export default TeamFace;
