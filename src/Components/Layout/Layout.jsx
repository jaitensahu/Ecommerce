import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet, useLocation, useParams, useSearchParams } from "react-router-dom";
import { lazy } from "react";
import Headroom from "react-headroom";
import { useDispatch } from "react-redux";
import { setAllProduct, setIsLoading } from "../../Redux/Slices/FetchDataSlice";

const Footer = lazy(() => import("../Footer/Footer"));

const Layout = () => {
  let params = useLocation()
  let dispatch = useDispatch()
  if(!params.pathname.includes("category")){
    dispatch(setAllProduct([]));
    dispatch(setIsLoading({state:"ISCATEGORYLOADING",Load:true}))
  }
  return (
    <>
    <Headroom>
      <Header />
      </Headroom>
      <Suspense fallback={<h1>Loding...</h1>}>
      <Outlet />
      </Suspense>
      <Suspense fallback={<h1>Loding...</h1>}>
        {/* <h2>Preview</h2> */}
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
