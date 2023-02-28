// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@chakra-ui/react";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div style={{ marginTop: "-50px" }}>
      <Slider {...settings}>
        <div>
          <Image
            w={"100%"}
            src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/291f71468a6eff71.jpg?q=50"
            alt="err"
          />
        </div>
        <div>
          <Image
            w={"100%"}
            src="https://rukminim1.flixcart.com/flap/1000/1000/image/5655d35aa959ffe8.jpg"
            alt="err"
          />
        </div>
        <div>
          <Image
            w={"100%"}
            src="https://rukminim1.flixcart.com/flap/1000/1000/image/a9193a4988ff1328.jpg"
            alt="err"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
