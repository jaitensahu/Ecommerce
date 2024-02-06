import React, { useEffect, useState } from "react";
import "animate.css";

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
    <div>
      <div
        className={`h-screen w-screen ${`bg-heroBg${idx}`} animate__animated animate__fadeIn ${
          animation[idx]
        }`}
      >
        <div className="w-[70%] h-[70%] mx-auto flex items-center absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
          <div className="proDetails w-1/2">
            <h1>Product Details</h1>
          </div>
          <img
            src={images[idx]}
            alt=""
            className="w-[50%]  animate__animated "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
