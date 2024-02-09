import React from "react";
import { Link } from "react-router-dom";
const CategoryCard = () => {
  let categories = [
    {
      img: "https://similux-furniture.myshopify.com/cdn/shop/files/img-3_edd4f54e-ec99-45e6-802e-c595cb3de9ff_580x.jpg?v=1677818644",
      category: "Watch",
      buyNowLink: "",
    },
    {
      img: "https://www.shutterstock.com/image-photo/shopping-offer-happy-young-indian-260nw-2364347057.jpg",
      category: "Fashion Wear",
      buyNowLink: "",
    },
    {
      img: "https://st5.depositphotos.com/68631180/65598/i/450/depositphotos_655986376-stock-photo-grocery-shopping-concept-background-image.jpg",
      category: "Groceries",
      buyNowLink: "",
    },
  ];
  console.log(import.meta.env.MODE);
    return (
      <div className="flex flex-wrap gap-5 px-5 py-[50px]">
            {categories.map((category,idx) => {
            return (
              <div key={"abc"+idx} className=" cursor-pointer relative min-w-[300px] w-[30%] h-[300px] overflow-hidden flex-1 rounded-md">
                <img className="w-full h-full scale-110 hover:scale-125 transition-all duration-[3000ms]" src={category.img} alt=""/>
                <div className="absolute justify-center items-start top-[50%] left-[10px] flex flex-col gap-1 -translate-y-[50%] w-1/2">
                  <h3 className="text-4xl font-bold ">{category.category}</h3>
                  <Link
                    to={category.buyNowLink}
                    className="font-bold text-center text-sm text-[#42FFB6] bg-[#222222] py-2 px-[30%] rounded-md"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            );
        })}
        
      </div>
    );
};

export default CategoryCard;
