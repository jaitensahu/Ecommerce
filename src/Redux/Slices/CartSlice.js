import { createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "../../Firebase/Firebase";

const initialState = {
  productsInCart: [],
  cartValue: 0,
  productDetail: {},
  totalAmount: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "AddtoCart",
  initialState,
  reducers: {
    // Reducer Function To Increace Or Decrease Cart VAlue
    increament_decreament_func: (state, action) => {
      // Decrease cartValue in the ProductDetail Page
      if (action.payload == "DECREAMENT" && state.cartValue > 0) {
        state.cartValue = state.cartValue - 1;
      }
      // Increase cartValue in the ProductDetail Page
      if (action.payload == "INCREAMENT") {
        state.cartValue = state.cartValue + 1;
      }
      // Increase cartValue in the ShopingCart Page 
      if (action.payload.type == "CARTINCREAMENT") {
        const idx = state.productsInCart.findIndex(item => item.productId == action.payload.id)
        if (idx >= 0) {
          state.productsInCart[idx].cartItem += 1;
          state.productsInCart[idx].totalPrice = Math.floor((state.productsInCart[idx].totalPrice / (state.productsInCart[idx].cartItem - 1)) * state.productsInCart[idx].cartItem);

          addToDataBase(auth.currentUser.email, { cartItem: state.productsInCart[idx].cartItem, productId: action.payload.id })
        }

      }
      // Decrease cartValue in the ShopingCart Page
      if (action.payload.type == "CARTDECREAMENT") {
        const idx = state.productsInCart.findIndex(item => item.productId == action.payload.id)
        const numericString = action.payload.price
        const numericValue = parseFloat(numericString);
        if (idx >= 0 && state.productsInCart[idx].cartItem > 0) {
          state.productsInCart[idx].cartItem -= 1;
          state.productsInCart[idx].totalPrice = Math.floor((state.productsInCart[idx].totalPrice / (state.productsInCart[idx].cartItem + 1)) * state.productsInCart[idx].cartItem);
          if (state.productsInCart[idx].cartItem > 0)
            addToDataBase(auth.currentUser.email, { cartItem: state.productsInCart[idx].cartItem, productId: action.payload.id })
        }
        if (state.productsInCart[idx].cartItem == 0) {
          removeProductDataFromDB(auth.currentUser.email, action.payload.id)
        }
        state.totalAmount = state.productsInCart[idx].cartItem
        state.totalPrice = (numericValue * state.productsInCart[idx].cartItem)
      }
    },
    // Reducer Method To Update State of the Product Detail varible with the data from the API
    fetchData: (state, action) => {
      state.productDetail = action.payload
    },
    //  Reducer Method to update Cart Value In the UI At ProjectDetails Page
    updateInput: (state, action) => {
      state.cartValue = parseInt(action.payload)
    },
    //  Reducer Method To add product to cart and in the database
    addToCart: (state, action) => {
      state.productsInCart.push(action.payload.dispatch)
      // Function Call to add data in the database
      addToDataBase(auth.currentUser.email, action.payload);
    },
    //  Method to Get cartValue from database
    getCartValueFromDB: (state, action) => {
      addToDataBase(auth.currentUser.email, {}, action.payload.params, action.payload.dispatch)
    },
    //  Method to Get all the product added in the cart of the user 
    getCartArray: (state, action) => {
      state.productsInCart = action.payload
    },
  },
});


// ---Function to add or update cartDetails of a User in the Database-----
async function addToDataBase(email, cartData, Asin = "", dispatch) {

  const userDocRef = doc(db, "USER", email);
  const docSnap = await getDoc(userDocRef)
  const userData = docSnap.data();
  // If CartDetails Key Present in the Database then Push Or Update New cartData
  if (Object.keys(docSnap.data()).includes("cartDetails")) {
    let idPresent;
    let targetId = Object.keys(cartData).length != 0 ? cartData.productId : Asin;
    // If Product Id present in the Database updates its Cart value 
    const updatedArray = userData.cartDetails.map((ele) => {

      if (ele.productId == targetId) {
        if (Asin == "") {
          ele.cartItem = cartData.cartItem;
          idPresent = true;
        } else {
          dispatch(updateInput(ele.cartItem))
        }

      }else{
        dispatch(updateInput(0))
      }
      return ele
    })
    // ------ Add or Update Cart ------------------- 
    if (idPresent) {
      // If Product already added then update the number of cartItems
      console.log("still Adding...");
      await updateDoc(userDocRef, { cartDetails: updatedArray });
      console.log("added");
    } else {
      // Product Added to the Cart First Time 
      await updateDoc(userDocRef, {
        cartDetails: arrayUnion(cartData)
      });
    }

  } else {
    setDoc(doc(db, "USER", email), { ...userData, cartDetails: [cartData] })
  }
}
async function removeProductDataFromDB(email, productIdToRemove) {
  console.log("Deleting...");
  const userDocRef = doc(db, "USER", email);
  const docSnap = await getDoc(userDocRef)
  if (!docSnap.exists()) {
    console.log("No such Document");
    return;
  }
  const userData = docSnap.data();
  const updatedCartDetails = userData.cartDetails.filter(item => item.productId !== productIdToRemove);

  await updateDoc(userDocRef, {
    cartDetails: updatedCartDetails
  })

  console.log("deleted", data);

}
async function getCartValueFromDBFunction(asin, email) {

}

export const { updateToDataBase, increament_decreament_func, fetchData, updateInput, addToCart, getCartValueFromDB, getCartArray } = CartSlice.actions;
export default CartSlice.reducer;
