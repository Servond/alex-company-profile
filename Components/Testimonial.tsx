import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="h-[100vh] bg-[url('/images/peak2.jpg')] pb-8 bg-cover bg-center">
      <h1 className="heading">
        <span className="text-blue-500"> Our Client Testimonial</span>
      </h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        {/* Our Team Slider */}
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
