import React, { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const productAPIKey = import.meta.env.MODE === 'development' ? process.env.AMAZON_KEY : import.meta.env.VITE_SOME_KEY;
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// const 
import {
  increament_decreament_func,
  fetchData,
  updateInput,
  addToCart,
  getCartValueFromDB,
} from "../../Redux/Slices/CartSlice";
import axios from "axios";


const ProductDetailPage = () => {

  console.log(productAPIKey, import.meta.env.MODE);
  console.log("Rendering Product Detail Page");
  const [isLoading, setIsLoading] = useState(true);
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            className=""
            id="abc"
            src={productDetail?.product?.images[i]?.link }
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let { isLogin } = useSelector((state) => state.headerSlice);
  let { cartValue, productDetail } = useSelector((state) => state.CartSlice);
  let dispatch = useDispatch();

  if (!isLogin) {
    dispatch(updateInput(0));
  }

  function priceNumericConversion(stringValue) {
    const numericString = stringValue.replace(/[^\d.]/g, "");
    const numericValue = parseFloat(numericString);
    return numericValue;
  }
  let params = useParams();
  //----------------- Fetch Data From API------------------
 

  useEffect(() => {
    fetchProductDetails();
    if (isLogin) dispatch(getCartValueFromDB({ params: params.id, dispatch }));
  }, [dispatch, isLogin, params.id]);

  async function fetchProductDetails() {
    try {
      let response = await axios.get(
        `https://api.asindataapi.com/request?api_key=${productAPIKey}&type=product&amazon_domain=amazon.in&asin=${params.id}`
      );

      dispatch(fetchData(response.data));
      setIsLoading(false);
      
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="mt-[30px]">
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center w-full">
                <Skeleton className="w-[80%]">
                  {[1,2,3,4,5,6,4].map((ele, idx) => {
                    return (
                      <Skeleton
                        key={"msm" + idx}
                        className="rounded-2 mx-1 w-[150px] h-[400px] rounded-2 item-thumb"
                      />
                    );
                  }) || []}
                </Skeleton>
              </div>
              <div className="d-flex justify-content-center mb-3">
                <div className="slider-container">
                </div>
                
              </div>
          
            </aside>

            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                <Skeleton count={5}/>
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    
                  </div>
                  <span className="text-muted">
                    
                  </span>
                  <span className="text-success ms-2">
                  
                  </span>
                </div>

                <div className="mb-3">
                  <span className="h5">
                    
                  </span>
                  {/* <span className="text-muted">/per box</span> */}
                </div>
                <div className="flex flex-col">
                  <ul className="h-[150px]  overflow-hidden">
                    {[5,2,3,1,4].map((del, idx) => {
                      return (
                        <Skeleton />
                      );
                    })}
                  </ul>
                  <p className="self-end"><Skeleton /></p>
                </div>

                <hr />

                <div className="row mb-4">
                  {/* <!-- col.// --> */}
                  <div className="col-md-4 col-6 mb-3">
                    <Skeleton className="mb-2 d-block"></Skeleton>
                    <Skeleton
                      className="input-group mb-3"
                      style={{ width: "170px" }}
                    >
                      <Skeleton
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                      >
                        <Skeleton />
                      </Skeleton>
                      <Skeleton
                        type="text"
                        className="form-control text-center border border-secondary"
                      />
                      <Skeleton
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                      >
                        <i><Skeleton /></i>
                      </Skeleton>
                    </Skeleton>
                  </div>
                </div>
                <div
                  className=" shadow-0"
                >
                  {" "}
                  <Skeleton /> {" "}
                </div>
                
                  <Skeleton
                  className="" />
                
                  {" "}
                  <Skeleton />{" "}
              </div>
            </main>
          </div>
        </div>
      </section>
      </div>
    )
  }
  

  return (
    <div className="mt-[2px]">
      <section className="py-4">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center w-full">
                <Slider {...settings} className="w-[80%]">
                  {productDetail?.product?.images?.map((ele, idx) => {
                    return (
                      // <>
                      <img
                        key={"mm" + idx}
                        className="rounded-2 mx-1 rounded-2 item-thumb"
                        src={ele.link}
                      />
                    );
                  }) || []}
                </Slider>
              </div>
              <div className="d-flex justify-content-center mb-3">
                <div className="slider-container">
                </div>
                
              </div>
          
            </aside>

            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  {productDetail?.product?.title}
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">4.5</span>
                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1"></i>154
                    orders
                  </span>
                  <span className="text-success ms-2">
                    {productDetail?.product?.buybox_winner?.availability?.raw }
                  </span>
                </div>

                <div className="mb-3">
                  <span className="h5">
                    {productDetail?.product?.buybox_winner?.rrp?.value ??  ""}
                  </span>
                  {/* <span className="text-muted">/per box</span> */}
                </div>
                <div className="flex flex-col">
                  <ul className="h-[150px]  overflow-hidden">
                    {productDetail?.product?.feature_bullets?.map((del, idx) => {
                      return (
                        <li key={"lm" + idx}>
                          {del.replace(/\[(.*?)\]/, "$1").trim()}
                        </li>
                      );
                    }) || []}
                  </ul>
                  <p className="self-end">See More</p>
                </div>

                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div
                      className="input-group mb-3"
                      style={{ width: "170px" }}
                    >
                      <button
                        onClick={() =>
                          dispatch(increament_decreament_func("DECREAMENT"))
                        }
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        onChange={(e) => dispatch(updateInput(e.target.value))}
                        value={cartValue}
                        className="form-control text-center border border-secondary"
                        placeholder="0"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        onClick={() =>
                          dispatch(increament_decreament_func("INCREAMENT"))
                        }
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-warning shadow-0">
                  {" "}
                  Buy now{" "}
                </a>
                <div
                  className="btn btn-primary shadow-0"
                  onClick={() => {
                    if (cartValue > 0 && isLogin) {
                      dispatch(
                        addToCart({
                          cartItem: cartValue,
                          productId: params.id,
                          img: productDetail.product.images[0].link,
                          title: productDetail.product.title,
                          price: productDetail?.product?.buybox_winner?.rrp?.value,
                          totalPrice:
                            cartValue * parseInt(productDetail?.product?.buybox_winner?.rrp?.value),
                            
                        })
                      );
                    } else {
                      alert("Please add product");
                    }
                  }}
                >
                  {" "}
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                </div>
                <a
                  href="#"
                  className="btn btn-light border border-secondary py-2 icon-hover px-3"
                >
                  {" "}
                  <i className="me-1 fa fa-heart fa-lg"></i> Save{" "}
                </a>
              </div>
            </main>
          </div>
        </div>
      </section>
      {/* <!-- content --> */}

      <section className="bg-light border-top py-4">
        <div className="container">
          <div className="row gx-4">
            <div className="col-lg-8 mb-4">
              <div className="border rounded-2 px-3 py-2 bg-white">
                {/* <!-- Pills navs --> */}
                <ul
                  className="nav nav-pills nav-justified mb-3"
                  id="ex1"
                  role="tablist"
                >
                  <li className="nav-item d-flex" role="presentation">
                    <Link
                      className="nav-link d-flex align-items-center justify-content-center w-100 active"
                      id="ex1-tab-1"
                      data-mdb-toggle="pill"
                      to="#ex1-pills-1"
                      role="tab"
                      aria-controls="ex1-pills-1"
                      aria-selected="true"
                    >
                      Specification
                    </Link>
                  </li>
                  <li className="nav-item d-flex" role="presentation">
                    <Link
                      className="nav-link d-flex align-items-center justify-content-center w-100"
                      id="ex1-tab-2"
                      data-mdb-toggle="pill"
                      to="#ex1-pills-2"
                      role="tab"
                      aria-controls="ex1-pills-2"
                      aria-selected="false"
                    >
                      Warranty info
                    </Link>
                  </li>
                  <li className="nav-item d-flex" role="presentation">
                    <Link
                      className="nav-link d-flex align-items-center justify-content-center w-100"
                      id="ex1-tab-3"
                      data-mdb-toggle="pill"
                      to="#ex1-pills-3"
                      role="tab"
                      aria-controls="ex1-pills-3"
                      aria-selected="false"
                    >
                      Shipping info
                    </Link>
                  </li>
                  <li className="nav-item d-flex" role="presentation">
                    <Link
                      className="nav-link d-flex align-items-center justify-content-center w-100"
                      id="ex1-tab-4"
                      data-mdb-toggle="pill"
                      to="#ex1-pills-4"
                      role="tab"
                      aria-controls="ex1-pills-4"
                      aria-selected="false"
                    >
                      Seller profile
                    </Link>
                  </li>
                </ul>
                {/* <!-- Pills navs --> */}

                {/* <!-- Pills content --> */}
                {/* <ProductSpecification /> */}
                <div
                  className={`tab-content h-[50vh] overflow-hidden`}
                  id="ex1-content"
                >
                  <div
                    className="tab-pane fade show active"
                    id="ex1-pills-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
                  >
                    <table className="table border mt-3 mb-2">
                      <tbody>
                        {productDetail?.product?.specifications?.map((ele, idx) => {
                          return (
                            <tr key={"abz" + idx}>
                              <th className="py-2">{ele.name}:</th>
                              <td className="py-2">{ele.value}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <h6 className="text-center">See More</h6>
                {/* <!-- Pills content --> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="px-0 border rounded-2 shadow-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Similar items</h5>

                    {productDetail?.sponsored_products?.map((ele, idx) => {
                      if (idx < 4)
                        return (
                          <div key={ele.asin} className="d-flex mb-3">
                            <a href={ele.link} className="me-3">
                              <img
                                src={ele.image}
                                style={{ minWidth: "96px", height: "96px" }}
                                className="img-md img-thumbnail"
                              />
                            </a>
                            <div className="info overflow-hidden">
                              <a
                                href={ele.link}
                                className="nav-link mb-1 h-6 whitespace-nowrap overflow-hidden overflow-ellipsis"
                              >
                                {ele.title}
                              </a>
                              <strong className="text-dark">
                                {" "}
                                {ele.price.raw}
                              </strong>
                            </div>
                          </div>
                        );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(ProductDetailPage);
