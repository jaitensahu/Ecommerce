import React, { useCallback, useEffect } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartArray,
  increament_decreament_func,
} from "../../Redux/Slices/CartSlice";

export default function ShoppingCart() {
  let dispatch = useDispatch();
  let { productsInCart} = useSelector((state) => state.CartSlice);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "USER", auth.currentUser.email), (doc) => {
      console.log("Current data: ", doc.data());
    });
  });
  
  function calculateTotal(productsInCart){
   return productsInCart.reduce((acc, curr) => {
        if (Object.keys(curr).length > 0) {
          console.log(acc, curr.totalPrice);
          return (acc += curr.totalPrice);
        }
        return acc;
      }, 5)
  }

  useEffect(() => {
    fetchCartDataFromDatabase();
  }, []);

  const fetchCartDataFromDatabase = useCallback(async () => {
    const docRef = doc(db, "USER", auth.currentUser.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      dispatch(getCartArray(docSnap.data().cartDetails));
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }, [productsInCart]);

  if (Object.keys(productsInCart).length == 0) {
    console.log("return krwade bhai");
  }
  return (
    <div>
      <div class="h-screen bg-gray-100 pt-20">
        <h1 class="mb-5 text-center text-2xl font-bold">Cart Items</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3">
            {productsInCart.map((item, idx) => {
              if (Object.keys(item).length != 0)
                return (
                  <div
                    key={"gd" + idx}
                    class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  >
                    <img
                      src={item.img}
                      alt="product-image"
                      class="w-full rounded-lg sm:w-40"
                    />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div class="mt-2 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-900  overflow-hidden">
                          {item.title}
                        </h2>
                        <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                      </div>
                      <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                          <span
                            onClick={() =>
                              dispatch(
                                increament_decreament_func({
                                  type: "CARTDECREAMENT",
                                  id: item.productId,
                                  price: item.price,
                                })
                              )
                            }
                            class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            -{" "}
                          </span>
                          <input
                            class="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={item.cartItem}
                            min="1"
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
                            class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div class="flex items-center space-x-4">
                          <p class="text-sm">Rs.{item.totalPrice}</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">
                Rs.{" "}
                {productsInCart.reduce((acc, curr) => {
                  if (Object.keys(curr).length > 0) {
                    console.log(acc, curr.totalPrice);
                    return (acc += curr.totalPrice);
                  }
                  return acc;
                }, 0)}
              </p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">$4.99</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">
                  Rs. 
                  {calculateTotal(productsInCart)}
                </p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
