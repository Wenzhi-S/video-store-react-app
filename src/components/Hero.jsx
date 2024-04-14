import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slidesData = [
    {
      id: 1,
      image: "./banner1.png",
    },
    {
      id: 2,
      image: "./banner2.png",
    },
    {
      id: 3,
      image: "./banner3.png",
    },
  ];

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id}>
            <img src={slide.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
