import React, { memo, useEffect, useState } from "react";
import "animate.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import Carasoul from "./Demo";
import FadeInUpText from "./Text";

const Hero = () => {
  console.log("hero rendered");
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
  let textData2 = ["Unleash Savings on Smart Devices:", "Upgrade Your Shoe Game:", "Happiness Delivered:" ]
  let textData = [`Explore Our Phone Collections`, "Explore New Arrivals for Every Occasion", "Three Times a Day"]
  let [heroText, setHeroText] = useState(textData[0])
  let [heroText2, setHeroText2] = useState(textData2[0])
let i=1;
  useEffect(() => {
    let timer = setInterval(() => {
      // change();
      setHeroText("Jaiten Sahu hasdb hd bdbdh jhdsj jshdjd")
      if(i>2){
        i=0;
      }
      console.log(i);
      setHeroText(()=>textData[i])
      setHeroText2(()=>textData2[i++])

    }, 5400);

    return ()=>{  
      console.log("Unmount");
    }
  }, []);

  return (
    <div className="h-screen hero">
      <div
        className={`h-full flex justify-center mt-[-65px] items-center w-screen animate__animated animate__fadeIn ${
          animation[idx]
        }`}
      >
        <div className="w-[90%] mx-auto flex-col-reverse flex min-[630px]:flex min-[630px]:flex-row items-center">
          <div className="proDetails w-1/2 ">
            <h1 className="text-3xl text-white whitespace-nowrap"><FadeInUpText key ={heroText} text={heroText} text2={heroText2}/></h1>
          </div>
          <div className="w-[100%] min-[630px]:w-[55%] absolute right-[-10%]">
            <Carasoul />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
