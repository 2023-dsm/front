import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageOne from "./assets/A.png";
import PageTwo from "./assets/B.png";
import PageThree from "./assets/C.png";
import PageFore from "./assets/D.png";
import PageFive from "./assets/E.png";
import Close from "./assets/close.png";
import "./Close.css";

const ImageSlider = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Close} className="Close" />
        <img src={PageOne} width="360px" height="640px" className="mom" />
      </div>
      <div>
        <img src={PageTwo} />
      </div>
      <div>
        <img src={PageThree} />
      </div>
      <div>
        <img src={PageFore} />
      </div>
      <div>
        <img src={PageFive} />
      </div>
    </Slider>
  );
};

export default ImageSlider;
