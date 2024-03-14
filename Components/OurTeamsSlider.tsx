import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamFace from "./TeamFace";

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

const OurTeamsSlider = () => {
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
      <TeamFace
        image="/images/4.jpeg"
        name="Alex Jhosua Virdo Manurung"
        role="Web Developer ( Frontend Dev )"
      />
      <TeamFace image="/images/5.jpeg" name="Ari Wibowo" role="CEO Of Esbex" />
      <TeamFace
        image="/images/3.jpeg"
        name="Ilham Achmad Syafii"
        role="Model"
      />
    </Carousel>
  );
};

export default OurTeamsSlider;
