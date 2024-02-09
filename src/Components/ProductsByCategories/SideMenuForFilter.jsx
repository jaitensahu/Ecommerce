import React, { useEffect } from "react";
import ProductsByCategories from "./ProductsByCategories";
import { useDispatch, useSelector } from "react-redux";
import { setAllProduct } from "../../Redux/Slices/FetchDataSlice";
const SideMenuForFilter = () => {
  let dispatch = useDispatch();
  let { originalDataArr } = useSelector((state)=>state.FetchDataSlice);

  useEffect(()=>{

  })
  function filter(val){
    console.log(val);
    let tempArray = originalDataArr?.filter((ele)=>{
        return ele.rating >= val;
    })
    dispatch(setAllProduct(tempArray))
}


  return (
    <div className="w-[10%]">
      <section class="containerleft">
        <div class="product_filter">
          <div>
            <h2 class="heading">filters</h2>
          </div>

          <div>
            <span class="filter-category-head">Discount</span>
            <article>
              <div class="inputs">
                <input
                  type="radio"
                  name="discount"
                  value="50.0"
                  id="discount50"
                />
                <label for="discount50">50% and more</label>
              </div>
              <div class="inputs">
                <input
                  type="radio"
                  name="discount"
                  value="40.0"
                  id="discount40"
                />
                <label for="discount40">40% and more</label>
              </div>
              <div class="inputs">
                <input
                  type="radio"
                  name="discount"
                  value="30.0"
                  id="discount30"
                />
                <label for="discount30">30% and more</label>
              </div>
              <div class="inputs">
                <input
                  type="radio"
                  name="discount"
                  value="20.0"
                  id="discount20"
                />
                <label for="discount20">20% and more</label>
              </div>
              <div class="inputs">
                <input
                  type="radio"
                  name="discount"
                  value="10.0"
                  id="discount10"
                />
                <label for="discount10">10% and more</label>
              </div>
            </article>
          </div>

          <div class="assured">
            <div class="fAssured">
              <input type="checkbox" id="ISflipcartAssured" />
              <img
                src="./assets/flipcartassured.png"
                alt=""
                class="flipcart_assured"
              />
            </div>
          </div>

          <div class="offers-category">
            <span class="filter-category-head">Offers</span>
            <article>
              <div class="inputsOffer">
                <input
                  type="checkbox"
                  value="noCostEMI"
                  name="nocostemi"
                  id="noCostEMI"
                />
                No Cost EMI
              </div>
            </article>
          </div>
          <div class="customer-rating-category">
            <span class="filter-category-head">Customer Rating</span>
            <article>
              <div  id="" class="Ratinginputs">
                <input
                onClick={(e) => {
                    e.stopPropagation(); 
                    filter(4)
                }}
                  type="radio"
                  name="rating"
                  value="4"
                  id="rating4"
                />
                <label for="rating4">
                  4 <i class="fa fa-star" aria-hidden="true"></i> and above
                </label>
              </div>
              <div class="Ratinginputs">
                <input 
                onClick={(e) => {
                    e.stopPropagation(); 
                    filter(3)
                }}
                type="radio" name="rating" value="3" id="rating3" />
                <label for="rating3">
                  3 <i class="fa fa-star" aria-hidden="true"></i> and above
                </label>
              </div>
              <div  class="Ratinginputs">
                <input 
                onClick={(e) => {
                    e.stopPropagation(); 
                    filter(2)
                }}
                type="radio" name="rating" value="2" id="rating2" />
                <label for="rating2">
                  2 <i class="fa fa-star" aria-hidden="true"></i> and above
                </label>
              </div>
              <div class="Ratinginputs">
                <input 
                onClick={(e) => {
                    e.stopPropagation(); 
                    filter(1)
                }}
                type="radio" name="rating" value="1" id="rating1" />
                <label for="rating1">
                  1 <i class="fa fa-star" aria-hidden="true"></i> and above
                </label>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SideMenuForFilter;
