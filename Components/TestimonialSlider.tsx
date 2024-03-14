import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestiFace from "./TestiFace";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {/* TeamFace / Photo*/}
      <TestiFace
        image="/images/tes1.jpeg"
        name="Tri Wiraswan"
        role="2nd Engineer LNG Vessel"
      />
      <TestiFace
        image="/images/tes2.jpeg"
        name="Teguh Budiawan "
        role="Technical Manager"
      />
      <TestiFace image="/images/tes3.jpeg" name="Ricki" role="Marine Manager" />
    </Carousel>
  );
};

export default TestimonialSlider;
