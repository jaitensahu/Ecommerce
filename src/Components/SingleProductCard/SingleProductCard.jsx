import React, { memo } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Accessories from "../../assets/Product-JSON-File/Accessories.json";
import Clothes from "../../assets/Product-JSON-File/Clothes.json";
import Laptops from "../../assets/Product-JSON-File/Laptop.json";
import Phones from "../../assets/Product-JSON-File/Phone.json";
import watches from "../../assets/Product-JSON-File/Watch.json";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Breathing, Image, Shimmer } from 'react-shimmer'

const SingleProductCard = () => {
  let dispatch = useDispatch();
  console.log("rendering SingleProduct Component");
  const responsive = {
    0: { items: 1 },
    795: { items: 2 },
    1024: { items: 3 },
    1440: { items: 4 },
  };
  let categories = [
    {
      category: "Laptops",
      JsonFile: Laptops,
    },
    {
      category: "Phones",
      JsonFile: Phones,
    },
    {
      category: "Watches",
      JsonFile: watches,
    },
    {
      category: "Accessories",
      JsonFile: Accessories,
    },
    {
      category: "Clothing",
      JsonFile: Clothes,  
    },
  ];
  function handleAddToCart(asin) {
    dispatch(addToCart({ cartItem: 1, productId: asin }))
  }
  return (
    <>
      {categories.map((ele,idx) => {
        return (
          <div key={"mm"+idx} className="px-4 py-2  mt-[-35px] w-[100%]" data-aos="fade-up">
            <h4 className="text-black mb-2 font-extrabold underline">{ele.category}</h4>
            <AliceCarousel
              items={6}
              itemsFit={"contain"}
              autoPlayControls={false}
              autoPlay={true}
              default={true}
              animationDuration={800}
              disableButtonsControls={false}
              disableDotsControls={true}
              infinite={true}
              responsive={responsive}
              autoPlayInterval={3000}
            >
              {ele.JsonFile.map((prod) => {
                return (
                  <div
                    key={prod.asin}
                    id={prod.asin}
                    className="w-[90%] h-[350px] pt-4 border shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                  >
                    <Link to={`/product-details/${prod.asin}`} >
                      <div id="imgAtSingleProductCard" className="flex justify-center items-center w-[100%] h-[50%]">
                      <img
                      // fallback={<Shimmer width={""} height={""}/> }
                        src={prod.image}
                        alt="Product"
                        className=" h-[100%] object-fit rounded-t-xl mix-blend-multiply"
                      /></div>
                      <div className="px-4 pt-3 w-72">
                        <span className="text-gray-400 mr-3 uppercase text-xs">
                          Brand
                        </span>
                        <p className="text-lg font-bold text-black truncate block capitalize">
                          {prod.title}
                        </p>
                        <Rating readOnly style={{ maxWidth: 100 }} value={prod.stars} />
                      </div>
                    </Link>
                    <div className="flex items-center w-[85%] mx-auto">
                      <p className="text-lg font-semibold text-black cursor-auto ">
                        {prod.price}
                      </p>
                      <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                          {prod.original_price}
                        </p>
                      </del>
                      <div className="ml-auto" onClick={()=>handleAddToCart(prod.asin)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-bag-plus "
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </AliceCarousel>
          </div>
        );
      })}
    </>
  );
};

export default memo(SingleProductCard);
