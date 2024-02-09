import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setAllProduct } from "../../Redux/Slices/FetchDataSlice";

const SortingComponent = () => {
  let params = useParams();
  let { allProductsOfCategory } = useSelector((state) => state.FetchDataSlice);
let dispatch = useDispatch();

  function sorting(basedOn) {
    console.log(allProductsOfCategory);
    let tempArray=[...allProductsOfCategory];
    if(basedOn=="lowTOHigh"){
        tempArray?.sort((a,b)=>{
            return a.price.value - b.price.value;
        })
    }
    if(basedOn == "highToLow"){
        tempArray?.sort((a,b)=>{
            return b.price.value - a.price.value;
        })
    }
    if(basedOn == "Populatity"){
        tempArray?.sort((a,b)=>{
            return b.ratings_total - a.ratings_total
        })
    }
    dispatch(setAllProduct(tempArray))
  }

  return (
    <div className="">
      <div className="sorting-options">
        <h2 className="sort-by-name">{params.categoryName}</h2>
        <span>(Showing 1 – 30 products of 65,154 products)</span>
        <div className="sort-by">
          <h3 className="sort-by-name ">Sort By</h3>
          <button 
          onClick={()=>sorting("Populatity")}
          className="popularity bg-red-300 mx-2 px-4 py-1 rounded-md">
            Popularity
          </button>
          <button
            onClick={()=>sorting("lowTOHigh")}
            className="Low_to_High bg-red-300 mx-2 px-4 py-1 rounded-md"
          >
            Price -- Low to High
          </button>
          <button onClick={()=>sorting("highToLow")} className="High_to_Low bg-red-300 mx-2 px-4 py-1 rounded-md">
            Price -- High to Low
          </button>
          <button className=" bg-red-300 mx-2 px-4 py-1 rounded-md">
            Newest First
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingComponent;
