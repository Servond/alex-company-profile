import React from "react";
import OurTeamsSlider from "./OurTeamsSlider";

const OurTeams = () => {
  return (
    <div className="bg-[#0a0a0a] pt-[4rem] md:pt-[8rem]">
      <h1 className="heading">
        Our <span className="text-orange-500">Teams</span>
      </h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        {/* Our Team Slider */}
        <OurTeamsSlider />
      </div>
    </div>
  );
};

export default OurTeams;
