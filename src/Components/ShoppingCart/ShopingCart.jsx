import React, { useCallback, useEffect, useRef } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartArray,
  increament_decreament_func,
  updateToDataBase,
} from "../../Redux/Slices/CartSlice";



export default function ShoppingCart() {
  let { productsInCart } = useSelector((state) => state.CartSlice);
  let { isLogin } = useSelector((state) => state.headerSlice);
  // console.log(isLogin);
  // console.log(productsInCart);
  let dispatch = useDispatch();


  
  useEffect(() => {
    fetchCartDataFromDatabase();
  }, []);

  function calculateTotal(productsInCart) {
    return productsInCart.reduce((acc, curr) => {
      if (Object.keys(curr).length > 0) {
        // console.log(acc, curr.totalPrice);
        return (acc += curr.totalPrice);
      }
      return acc;
    }, 5);
  }

  const fetchCartDataFromDatabase = useCallback(async () => {
    // console.log(auth.currentUser);
    const docRef = doc(db, "USER", auth.currentUser?.email);
    // console.log("abc", docRef);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      dispatch(getCartArray(docSnap.data().cartDetails));
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }, [productsInCart]);

  if (!isLogin) {
    return <h1>Please Login...</h1>;
  }

  if (Object.keys(productsInCart).length == 0) {
    return <h1>Loding...</h1>;
  }
  
  return (
    <div>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-5 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {productsInCart.map((item, idx) => {
              if (Object.keys(item).length != 0)
                return (
                  <div
                    key={"gd" + idx}
                    className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  >
                    <img
                      src={item.img}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-2 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900  overflow-hidden">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                      </div>
                      <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <span
                            onClick={() => {
                              dispatch(
                                increament_decreament_func({
                                  type: "CARTDECREAMENT",
                                  id: item.productId,
                                  price: item.price,
                                })
                              )
                            //  dispatch(updateToDataBase({asi}))
                            }
                              
                            }
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            -{" "}
                          </span>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={item.cartItem}
                            min="1"
                            readOnly
                          />
                          <span
                            onClick={() =>
                              dispatch(
                                increament_decreament_func({
                                  type: "CARTINCREAMENT",
                                  id: item.productId,
                                  price: item.price,
                                })
                              )

                            }
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">Rs.{item.totalPrice}</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
          {/* <!-- Sub total --> */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">
                Rs.{" "}
                {productsInCart.reduce((acc, curr) => {
                  if (Object.keys(curr).length > 0) {
                    // console.log(acc, curr.totalPrice);
                    return (acc += curr.totalPrice);
                  }
                  return acc;
                }, 0)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  Rs.
                  {calculateTotal(productsInCart)}
                </p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
