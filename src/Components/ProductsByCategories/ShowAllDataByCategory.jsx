import React from "react";
import SideMenuForFilter from "./SideMenuForFilter";
import ProductsByCategories from "./ProductsByCategories";
import SortingComponent from "./SortingComponent";

const ShowAllDataByCategory = () => {
  return (
    <div >
      <div>
        <SortingComponent />
      </div>
      <div className="flex">
        <SideMenuForFilter />
        <ProductsByCategories />
      </div>
    </div>
  );
};

export default ShowAllDataByCategory;
