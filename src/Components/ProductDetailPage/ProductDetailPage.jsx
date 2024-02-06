import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increament_decreament_func,
  fetchData,
  updateInput,
  addToCart,
  getCartValueFromDB,
} from "../../Redux/Slices/CartSlice";
// import {isLogin} from '../../Redux/Slices/AuthSlice'
import axios from "axios";

const ProductDetailPage = () => {
  console.log("rendered ProductDetailPage");
  let { isLogin } = useSelector((state) => state.headerSlice);
  let { cartValue, productDetail } = useSelector((state) => state.CartSlice);
  let dispatch = useDispatch();
  let details = {
    status: "ok",
    request_id: "9130427c-c48e-11ee-a81d-42004e494300",
    start_time: "2024-02-06 01:25:05",
    finish_time: "2024-02-06 01:25:09",
    data: {
      title:
        "aApple AirPods (2nd Generation) Wireless Ear Buds, Bluetooth Headphones with Lightning Charging Case Included, Over 24 Hours of Battery Life, Effortless Setup for iPhone",
      url: "https://www.amazon.com/dp/B07PXGQC1Q",
      image: [
        "https://m.media-amazon.com/images/I/21FRfOT6WbL.jpg",
        "https://m.media-amazon.com/images/I/31-EtDBk35L.jpg",
        "https://m.media-amazon.com/images/I/21wE8BPh4rL.jpg",
        "https://m.media-amazon.com/images/I/21WT-9iJpQL.jpg",
        "https://m.media-amazon.com/images/I/316FkBFJvfL.jpg",
        "https://m.media-amazon.com/images/I/21mlcg8wB4L.jpg",
        "https://m.media-amazon.com/images/I/51CUbqrH3yL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg",
      ],
      price: "$89.99",
      original_price: "$129.00",
      savings_percentage: "-30%",
      savings_price: null,
      product_details: {
        Brand: "Apple",
        "Model Name": "AirPods",
        Color: "White",
        "Form Factor": "In Ear",
        "Connectivity Technology": "Bluetooth 5.0",
      },
      about_this_product: [
        "HIGH-QUALITY SOUND — Powered by the Apple H1 headphone chip, AirPods (2nd generation) deliver rich, vivid sound.",
        "EFFORTLESS SETUP — After a simple one-tap setup, AirPods are automatically on and always connected. They sense when they’re in your ears and pause when you take them out. And sound seamlessly switches between your iPhone, Apple Watch, Mac, iPad, and Apple TV.",
        "VOICE CONTROL WITH SIRI — Just say “Hey Siri” for assistance without having to reach for your iPhone.",
        "24-HOUR BATTERY LIFE — More than 24 hours total listening time with the Charging Case.",
        "AUDIO SHARING — Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV.",
        "LEGAL DISCLAIMERS — This is a summary of the main product features. See “Additional information” to learn more.",
      ],
      product_information: null,
      product_technical_details: null,
      product_description: null,
      what_in_the_box: ["Apple AirPods with Wired Charging Case"],
      important_information: null,
      is_renewed: false,
    },
  };

  console.log(isLogin);
  let details2 = {
    title:
      "realme narzo N53 (Feather Black, 8GB+128GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display",
    url: "https://www.amazon.in/dp/B0CKN56PQ8",
    image: [
      "https://m.media-amazon.com/images/I/41QssaE9gfL._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/414U2txvtSL.SX38_SY50_CR,0,0,38,50_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg",
      "https://m.media-amazon.com/images/I/51IzMRwuwAL._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/31-VgbCaObL._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/31LlPbVTCdL._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/11o-rbPg24L._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/21RDcfsezhL._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/41QssaE9gfL._SS36_.jpg",
      "https://m.media-amazon.com/images/I/41dEcQR7UnL._SS36_.jpg",
    ],
    price: "₹8,999.00",
    original_price: "₹13,999",
    savings_percentage: "-36%",
    savings_price: null,
    product_details: {
      Brand: "realme",
      "Model Name": "realme narzo N53",
      "Network Service Provider": "Unlocked for All Carriers",
      "Operating System": "Android 13.0",
      "Cellular Technology": "4G",
    },
    about_this_product: [
      "Enjoy smooth multitasking and effortless app switching with the powerful 8GB dynamic RAM. Store all your favorite apps, photos, and files with the generous 128 GB ROM",
      "Experience lightning-fast charging with the 33W SUPERVOOC technology, getting your device ready in no time. Say goodbye to long charging times and stay powered up for longer durations.",
      "The slim and sleek 7.49mm design adds a touch of elegance to your device, making it comfortable to hold and carry. The feather gold design enhances the visual appeal, giving your phone a premium and luxurious look.",
      "Capture stunning, detailed photos with the high-resolution 50MP AI camera, bringing your memories to life.The AI-powered camera technology ensures intelligent scene recognition and enhances your photography skills.",
      "Stay connected and productive for extended periods with the massive 5000mAh battery, eliminating the need for frequent recharging. Enjoy long hours of entertainment, gaming, and browsing without worrying about running out of battery power.",
    ],
    product_information: null,
    product_technical_details: {
      OS: "Android 13.0",
      RAM: "8 GB",
      "Product Dimensions": "16.7 x 7.7 x 0.7 cm; 182 Grams",
      Batteries: "1 Lithium Polymer batteries required. (included)",
      "Item model number": "RMX3761",
      "Wireless communication technologies": "Cellular",
      "Connectivity technologies": "Bluetooth, Wi-Fi, USB",
      GPS: "True",
      "Special features": "Rear Camera, Front Camera, Camera",
      "Other display features": "Wireless",
      "Device interface - primary": "Touchscreen",
      "Other camera features": "Rear, Front",
      "Audio Jack": "3.5 mm",
      "Form factor": "Smartphone",
      Colour: "Feather Black",
      "Battery Power Rating": "5000",
      "Whats in the box":
        "Handset, Important Info booklet with Warranty Card, Protective Case, Adapter, USB Cable",
      Manufacturer: "OPPO Mobiles India Pvt Ltd",
      "Country of Origin": "India",
      "Item Weight": "182 g",
    },
    product_description: null,
    what_in_the_box: [
      "Handset",
      "Adapter",
      "USB Cable",
      "Protective Case",
      "Important Info booklet with Warranty Card",
    ],
    important_information: null,
    is_renewed: false,
  };
  function priceNumericConversion(stringValue) {
    const numericString = stringValue.replace(/[^\d.]/g, "");
    const numericValue = parseFloat(numericString);
    console.log(numericValue);
    return numericValue;
  }
  let params = useParams();
  //----------------- Fetch Data From API------------------
  const options = {
    method: "GET",
    url: "https://amazon-product-data6.p.rapidapi.com/product-detail",
    params: {
      asin: params.id,
      country: "IN",
    },
    headers: {
      "X-RapidAPI-Key": "95a611da3amsh9183f95b0c45252p1dcc81jsnba58b31cd1e7",
      "X-RapidAPI-Host": "amazon-product-data6.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetchProductDetails();
    if (isLogin) dispatch(getCartValueFromDB({ params: params.id, dispatch }));
  }, []);

  useEffect(() => {
    // console.log(productDetail);
  }, [productDetail]);

  async function fetchProductDetails() {
    try {
      // const response = await axios.request(options);
      // console.log(response.data.data);
      // dispatch(fetchData(response.data.data));
    } catch (error) {
      console.error(error);
    }
  }

  //  console.log(productDetail);

  return (
    <div className="mt-[30px]">
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  className="rounded-4"
                  target="_blank"
                  data-type="image"
                  href={details2.image?.[0]}
                >
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    className="rounded-4 fit"
                    src={details2.image?.[0] || ""}
                  />
                </a>
              </div>
              <div className="d-flex justify-content-center mb-3">
                {details2.image?.map((ele, idx) => {
                  return (
                    <a
                      key={"mm" + idx}
                      data-fslightbox="mygalley"
                      className="border mx-1 rounded-2 item-thumb"
                      target="_blank"
                      data-type="image"
                      href={ele}
                    >
                      <img
                        width="60"
                        height="60"
                        className="rounded-2"
                        src={ele}
                      />
                    </a>
                  );
                }) || []}
              </div>
              {/* <!-- thumbs-wrap.// -->
        <!-- gallery-wrap .end// --> */}
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">{details2.title}</h4>
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
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">{details2.price}</span>
                  {/* <span className="text-muted">/per box</span> */}
                </div>
                <div className="flex flex-col">
                  <ul className="h-[150px]  overflow-hidden">
                    {details2.about_this_product?.map((del, idx) => {
                      return <li key={"lm" + idx}>{del}</li>;
                    }) || []}
                  </ul>
                  <p className="self-end">See More</p>
                </div>

                <hr />

                <div className="row mb-4">
                  {/* <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: "35px" }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div> */}
                  {/* <!-- col.// --> */}
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
                          img: details2.image[0],
                          title: details2.title,
                          price: details2.price,
                          totalPrice:
                            cartValue * priceNumericConversion(details2.price),
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
                <div className="tab-content" id="ex1-content">
                  <div
                    className="tab-pane fade show active"
                    id="ex1-pills-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
                  >
                    <p>{}</p>
                    <div className="row mb-2">
                      <div className="col-12 col-md-6">
                        <ul className="list-unstyled mb-0">
                          {Object.keys(
                            details2.product_technical_details || {}
                          ).map((key, idx) => {
                            if (
                              idx <
                              Object.keys(
                                details2.product_technical_details || {}
                              ).length /
                                2
                            ) {
                              return (
                                <li key={"qq" + idx}>
                                  <i className="fas fa-check text-success me-2"></i>
                                  {details2.product_technical_details[key]}
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                      <div className="col-12 col-md-6 mb-0">
                        <ul className="list-unstyled">
                          {Object.keys(
                            details2.product_technical_details || {}
                          ).map((key, idx) => {
                            if (
                              idx >
                              Object.keys(
                                details2.product_technical_details || {}
                              ).length /
                                2
                            ) {
                              return (
                                <li key={"ew" + idx}>
                                  <i className="fas fa-check text-success me-2"></i>
                                  {details2.product_technical_details[key]}
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                    </div>
                    <table className="table border mt-3 mb-2">
                      <tbody>
                        {Object.keys(details2.product_details || {}).map(
                          (ele, idx) => {
                            return (
                              <tr key={"abz" + idx}>
                                <th className="py-2">{ele}:</th>
                                <td className="py-2">
                                  {details2.product_details[ele]}
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade mb-2"
                    id="ex1-pills-2"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-2"
                  >
                    Tab content or sample information now <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo
                  </div>
                  <div
                    className="tab-pane fade mb-2"
                    id="ex1-pills-3"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-3"
                  >
                    Another tab content or sample information now <br />
                    Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                  </div>
                  <div
                    className="tab-pane fade mb-2"
                    id="ex1-pills-4"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-4"
                  >
                    Some other tab content or sample information now <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
                {/* <!-- Pills content --> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="px-0 border rounded-2 shadow-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Similar items</h5>
                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg"
                          style={{ minWidth: "96px", height: "96px" }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          Rucksack Backpack Large <br />
                          Line Mounts
                        </a>
                        <strong className="text-dark"> $38.90</strong>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg"
                          style={{ minWidth: "96px", height: "96px" }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          Summer New Men's Denim <br />
                          Jeans Shorts
                        </a>
                        <strong className="text-dark"> $29.50</strong>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpgp"
                          style={{ minWidth: "96px", height: "96px" }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          {" "}
                          T-shirts with multiple colors, for men and lady{" "}
                        </a>
                        <strong className="text-dark"> $120.00</strong>
                      </div>
                    </div>

                    <div className="d-flex">
                      <a href="#" className="me-3">
                        <img
                          src="https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpgp"
                          style={{ minWidth: "96px", height: "96px" }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          {" "}
                          Blazer Suit Dress Jacket for Men, Blue color{" "}
                        </a>
                        <strong className="text-dark"> $339.90</strong>
                      </div>
                    </div>
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

export default ProductDetailPage;
