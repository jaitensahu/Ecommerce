import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  fetchCategoriesThunk,
  setIsLoading,
} from "../../Redux/Slices/FetchDataSlice";
import { Link } from "react-router-dom";

const CategoryList = () => {
  console.log("Rendring CategoryList Component");
  let { categories, isLoading } = useSelector((state) => state.FetchDataSlice, (a,b)=> a===b );

  let dispatch = useDispatch();
  const abc=useCallback(()=>{
    dispatch(fetchCategoriesThunk({ id: "1069664", List: "CATEGORYLIST" }));
  },[])
  useEffect(() => {
    console.log("calling");
    // updates category one time and then updates it whenever isLoading states changes
    abc()
  }, []);



useEffect(()=>{
  console.log("calling2");
  if (Object.keys(categories).length != 0) {
    dispatch(setIsLoading({ state: "ISLOADING", Load: false }));
  }
}, [categories])


  if (isLoading) {
    return (
      <div className="w-[15%]">
        <h5 className="border-b-2 font-extrabold border-black">Categories</h5>
        <Skeleton count={15} className="w-[100%]" /> ;
      </div>
    );
  }

  return (
    <div>
      <h5 className="border-b-2 font-extrabold border-black">Categories</h5>
      <ul className="h-[80vh] overflowX-hidden overflow-y-scroll p-0">
        {categories.map((ele, idx) => {
          return (
            <Link key={"kk"+ele.value} to={`/category/${ele.name}/${ele.value.split("/")[1]}`}>
              <li key={ele.value} value={ele.value.split("/")[1]}>
                {ele.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(CategoryList);
