import React, { useEffect, useState } from "react";
import "animate.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import Carasoul from "../../Demo";

const Hero = () => {
  let backgroundColor = ["red", "blue", "green"];
  let [idx, setIdx] = useState(0);
  let images = [
    "https://ongpng.com/wp-content/uploads/2023/03/4.Fire-Boltt-Ninja_1500x1500.png",
    "https://freepngimg.com/thumb/shoes/4-2-shoes-free-download-png.png",
    "https://pngimg.com/uploads/iphone_12/iphone_12_PNG23.png",
  ];
  let animation = ["animate__fadeIn", "animate__fadeUp", "animate__fadeIn"];

  function change() {
    setIdx((prev) => {
      if (prev > 1) {
        return 0;
      }
      return prev + 1;
    });
  }

  useEffect(() => {
    setInterval(() => {
      change();
    }, 8000);
  }, []);

  return (
    <div className="h-screen hero">
      <div
        className={`h-full flex justify-center mt-[-65px] items-center w-screen animate__animated animate__fadeIn ${
          animation[idx]
        }`}
      >
        <div className="w-[100%] mx-auto flex items-center">
          <div className="proDetails w-1/2">
            <h1>Product Details</h1>
          </div>
          <div className="w-1/2">
            <Carasoul />
          </div>

          {/* <CCarousel controls dark transition="slide" className="w-[50%]">
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src="https://ongpng.com/wp-content/uploads/2023/03/4.Fire-Boltt-Ninja_1500x1500.png"
                alt="slide 1"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src="https://similux-furniture.myshopify.com/cdn/shop/files/s-1-img_0ce6ce17-ca7f-4f9d-b717-b784ae18a48e_1440x.png?v=1677815549"
                alt="slide 2"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src="https://pngimg.com/uploads/iphone_12/iphone_12_PNG23.png"
                alt="slide 3"
              />
            </CCarouselItem>
          </CCarousel> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
