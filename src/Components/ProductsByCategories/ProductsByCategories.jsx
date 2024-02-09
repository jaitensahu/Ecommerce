import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesThunk, setIsLoading } from "../../Redux/Slices/FetchDataSlice";
import { addToCart } from "../../Redux/Slices/CartSlice";
import Skeleton from "react-loading-skeleton";
import { isAllOf } from "@reduxjs/toolkit";

const ProductsByCategories = () => {
 console.log("Rendering Product By Category");
  let params = useParams()
  let dispatch = useDispatch();
  let { allProductsOfCategory, isProductCategoryLoading } = useSelector((state)=>state.FetchDataSlice); 
  useEffect(()=>{
    dispatch(fetchCategoriesThunk({id:params.id, List:"ALLPRODUCTS_OF_CATEGORY"}));
  },[])
  if(allProductsOfCategory.length!=0){
    dispatch(setIsLoading({state:"ISCATEGORYLOADING",Load:false}));
  }
  function handleAddToCart(asin) {
    dispatch(addToCart({ cartItem: 1, productId: asin }))
  }
  console.log(isProductCategoryLoading);
  // let tempArray = [...allProductsOfCategory]

  if(isProductCategoryLoading){
    return(
      <div className="flex justify-center w-full">
      <div className=" flex w-fit mx-auto flex-wrap gap-4 justify-around p-3">
        {[1,1,1,1,1,1,1,1].map((pro) => {
          return (
            <Skeleton className="w-[400px] h-[400px] rounded-md border py-4 grow max-w-[300px] min-w-[220px] px-2 relative">
              <div className=" h-[200px] overflow-hidden flex justify-center items-center">
                <Skeleton
                  className="w-[60%]"
                  alt=""
                />
              </div>
              <div className="detail flex flex-col ">
                <h5 className="w-full mt-2 font-bold h-6 overflow-hidden overflow-ellipsis whitespace-nowrap">
                  <Skeleton />
                </h5>
                <div>
                  <strong><Skeleton /></strong>{" "}
                  <strong className="text-gray-300 line-through">
                    <Skeleton />
                  </strong>
                </div>
                <Skeleton />
                <p className="text-sm"><Skeleton /></p>
                
              </div>
              
              <Skeleton className="bg-blue-300 rounded-md w-full"></Skeleton>
            </Skeleton>
          );
        })}
      </div>
    </div>
    )
  }

  return (
    <div className="flex justify-center w-full">
      <div className=" flex w-fit mx-auto justify-around flex-wrap gap-4  p-3">
        {allProductsOfCategory.map((pro) => {
          return (
            <div className="w-[100%]  rounded-md border py-4 grow max-w-[300px] min-w-[220px] px-2 relative">
             <Link to={`/product-details/${pro.asin}`}>
              <div className=" h-[200px] overflow-hidden flex justify-center items-center">
                <img
                  className="w-[60%]"
                  src={pro.image}
                  alt=""
                />
                <p className="absolute top-0 left-0 bg-blue-400">
                  {Math.floor(
                    100 - (pro.prices[0]?.value / pro.prices[1]?.value) * 100
                  )}
                  %
                </p>
                <FaRegHeart className="absolute top-0 right-0" />
              </div>
              <div className="detail flex flex-col ">
                <h5 className="w-full mt-2 font-bold h-6 overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {pro.title}
                </h5>
                <div>
                  <strong>Rs. {pro.price.raw}</strong>{" "}
                  <strong className="text-gray-300 line-through">
                    {pro.prices[1]?.raw}
                  </strong>
                </div>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={pro.rating}
                  readOnly
                  className="mt-2"
                  //   onChange={setRating}
                />
                <p className="text-sm">{pro.delivery?.tagline}</p>
                
              </div>
              </Link>
              
              <button onClick={()=>handleAddToCart({
                cartItem: 1,
                productId: pro.asin,
                img: pro.image,
                title: pro.title,
                price: pro.price?.value,
                totalPrice:pro.price.value,
              })} className="bg-blue-300 rounded-md w-full">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsByCategories;
