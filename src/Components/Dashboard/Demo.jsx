import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

const Carasoul = () => {
  return (
      <TiltCard />
  );
};

const ROTATION_RANGE = 35;
const HALF_ROTATION_RANGE = 35 / 2;

const TiltCard = () => {
  const ref = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width/2;
    const height = rect.height/2;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = - mouseX / width - HALF_ROTATION_RANGE;
    const rY = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setTranslateX(rX);
    setTranslateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setTranslateX(0);
    setTranslateY(0);
  };

  return (
    <div className="inset-4  grid place-content-center rounded-xl w-[80%]">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform: `translateX(${translateX}px) translateY(${translateY}px)`
        }}
        animate={{
          translateX,
          translateY,
        }}
        className="relative  rounded-xl "
      >
        <CCarousel controls dark transition="slide" className=" absolute right-0 w-[80%] cursor-pointer">
          <CCarouselItem>
            <CImage
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
              className="drop-shadow-lg d-block w-100 "
              src="https://ongpng.com/wp-content/uploads/2023/03/4.Fire-Boltt-Ninja_1500x1500.png"
              alt="slide 1"
            />
          </CCarouselItem>

          <CCarouselItem>
            <CImage
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
              className="drop-shadow-lg d-block w-100"
              src="https://similux-furniture.myshopify.com/cdn/shop/files/s-1-img_0ce6ce17-ca7f-4f9d-b717-b784ae18a48e_1440x.png?v=1677815549"
              alt="slide 2"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
              className="d-block w-100"
              src="https://pngimg.com/uploads/iphone_12/iphone_12_PNG23.png"
              alt="slide 3"
            />
          </CCarouselItem>
        </CCarousel>
      </motion.div>
    </div>
  );
};

export default Carasoul;
