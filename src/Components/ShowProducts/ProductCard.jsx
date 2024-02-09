import React from "react";
import { FaRegHeart } from "react-icons/fa";
import prod from "../JSONdata/pro.json";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const ProductCard = () => {
  const pro = {
    position: 1,
    title:
      "INALSA Air Fryer Oven 1700 W|18 liters Capacity | 12 Preset Functions with Roast, Reheat, Dehydrate, Bake| Rotisserie & Convection|6 Accessories|2 Year Warranty Dual Heating Elements Recipe Book|Black",
    asin: "B0CD2GFK9Q",
    link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNDcxNjQzNzg2ODE0MDM4OjE3MDc0MDYxMjk6c3BfYXRmX2Jyb3dzZTozMDAxMjg1MDEzNDQ2MzI6OjA6Og&url=%2FINALSA-18-Rotisserie-Convection-Accessories%2Fdp%2FB0CD2GFK9Q%2Fref%3Dsr_1_1%3Fqid%3D1707406129%26s%3Dappliances%26sr%3D1-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl%26psc%3D1",
    recent_sales: "50+ bought in past month",
    categories: [
      {
        name: "Appliances",
        id: "appliances",
      },
    ],
    image: "https://m.media-amazon.com/images/I/61u33NxkY8L._AC_UL320_.jpg",
    deal: {
      link: "https://www.amazon.in/gp/goldbox/",
      badge_text: "Limited time deal",
    },
    is_prime: true,
    rating: 4.4,
    ratings_total: 3744,
    sponsored: true,
    prices: [
      {
        symbol: "₹",
        value: 10500,
        currency: "INR",
        raw: "₹10,500",
        name: "Limited time deal",
        is_primary: true,
      },
      {
        symbol: "₹",
        value: 24995,
        currency: "INR",
        raw: "₹24,995",
        name: "Limited time deal",
        is_rrp: true,
      },
    ],
    price: {
      symbol: "₹",
      value: 10500,
      currency: "INR",
      raw: "₹10,500",
      name: "Limited time deal",
      is_primary: true,
    },
    delivery: {
      tagline: "Get it by Saturday, 10 February",
    },
  };

  return (
    <div className="w-[100%]  rounded-md border py-4 grow max-w-[300px] min-w-[220px] px-2 relative">
      <div className=" flex justify-center items-center">
        <img
          className="w-[100%]"
          src="https://m.media-amazon.com/images/I/71TaT3nhcvL._AC_UY218_.jpg"
          alt=""
        />
        <p className="absolute top-0 left-0 bg-blue-400">{Math.floor(100-(pro.prices[0].value/pro.prices[1].value)*100)}%</p>
        <FaRegHeart className="absolute top-0 right-0" />
      </div>
      <div className="detail flex flex-col ">
        <h5 className="w-full mt-2 font-bold h-6 overflow-hidden overflow-ellipsis whitespace-nowrap">{pro.title}</h5>
        <div>
          <strong>Rs. {pro.price.raw}</strong>{" "}
          <strong className="text-gray-300 line-through">
            {pro.prices[1].raw}
          </strong>
        </div>
        <Rating
          style={{ maxWidth: 100 }}
          value={pro.rating}
          readOnly
          className="mt-2"
          //   onChange={setRating}
        />
        <p className="text-sm">{pro.delivery.tagline}</p>
        <button className="bg-blue-300 rounded-md">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
