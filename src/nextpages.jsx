import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageOne from "./assets/A.png";
import PageTwo from "./assets/B.png";
import PageThree from "./assets/C.png";
import PageFour from "./assets/D.png";
import PageFive from "./assets/E.png";
import Close from "./assets/close.png";
import "./Close.css";
import main from "./components/startt/index";

const ImageSlider = () => {
  const navigate = useNavigate();

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const close = () => {
    navigate("/main");
    // Define the close function logic here
  };

  return (
    <Slider {...settings}>
      <div>
        <div onClick={close}>
          <img src={Close} className="Close" alt="Close" />
        </div>{" "}
        <img src={PageOne} height={600} className="mom" alt="Page One" />
      </div>
      <div>
        <div onClick={close}>
          <img src={Close} className="Close" alt="Close" />
        </div>
        <img src={PageTwo} height={600} className="mom" alt="Page Two" />
      </div>
      <div>
        <div onClick={close}>
          <img src={Close} className="Close" alt="Close" />
        </div>
        <img src={PageThree} height={600} className="mom" alt="Page Three" />
      </div>
      <div>
        <div onClick={close}>
          <img src={Close} className="Close" alt="Close" />
        </div>
        <img src={PageFour} height={600} className="mom" alt="Page Four" />
      </div>
      <div>
        <div onClick={close}>
          <img src={Close} className="Close" alt="Close" />
        </div>
        <img src={PageFive} height={600} className="mom" alt="Page Five" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
