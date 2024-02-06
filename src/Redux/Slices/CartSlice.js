import { createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "../../Firebase/Firebase";
import { useDispatch } from "react-redux";


const initialState = {
  productsInCart: [],
  cartValue: 0,
  productDetail: {},
  totalAmount:0,
  totalPrice:0,
};

const CartSlice = createSlice({
  name: "AddtoCart",
  initialState,
  reducers: {
    increament_decreament_func: (state, action) => {
      if (action.payload == "DECREAMENT" && state.cartValue > 0) {
        state.cartValue = state.cartValue - 1;
      }
      if (action.payload == "INCREAMENT") {
        state.cartValue = state.cartValue + 1;
      }
      if(action.payload.type == "CARTINCREAMENT"){
          const idx=state.productsInCart.findIndex(item=>item.productId == action.payload.id)
          if(idx>=0){
            state.productsInCart[idx].cartItem += 1;
            state.productsInCart[idx].totalPrice =Math.floor((state.productsInCart[idx].totalPrice/(state.productsInCart[idx].cartItem-1))*state.productsInCart[idx].cartItem);
          }
      }
      if(action.payload.type == "CARTDECREAMENT"){
        const idx=state.productsInCart.findIndex(item=>item.productId == action.payload.id)
        const numericString = action.payload.price.replace(/[^\d.]/g, '');
        const numericValue = parseFloat(numericString);
        // console.log(numericValue);
        if(idx>=0){
          state.productsInCart[idx].cartItem -= 1;
          state.productsInCart[idx].totalPrice =Math.floor((state.productsInCart[idx].totalPrice/(state.productsInCart[idx].cartItem+1))*state.productsInCart[idx].cartItem);
        }
        console.log(numericValue,state.productsInCart[idx].cartItem);
        state.totalAmount = state.productsInCart[idx].cartItem
        state.totalPrice=(numericValue * state.productsInCart[idx].cartItem)
        console.log(state.totalPrice);
    }
    },
    fetchData: (state, action) => {

      state.productDetail = action.payload
    },
    updateInput: (state, action) => {
      console.log(action.payload);
      state.cartValue = parseInt(action.payload)
    },

    addToCart: (state, action) => {
      state.productsInCart.push(action.payload.dispatch)
      console.log(action.payload);
      // Function Call to add data in the database
      addToDataBase(auth.currentUser.email, action.payload);
    },
    getCartValueFromDB: (state, action) => {
      console.log(action.payload);
      addToDataBase(auth.currentUser.email, {}, action.payload.params, action.payload.dispatch)
    },
    getCartArray: (state, action) => {
      state.productsInCart=action.payload
    },

    calculateTotalAmount:(state, action)=>{

    }
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
    console.log(targetId);
    const updatedArray = userData.cartDetails.map((ele) => {

      if (ele.productId == targetId) {
        if (Asin == "") {
          console.log("js");
          ele.cartItem = cartData.cartItem;
          idPresent = true;
        } else {
          console.log("Calling a function to show the cartdata");
          dispatch(updateInput(ele.cartItem))
        }

      }
      return ele
    })
    // ------ Add or Update Cart ------------------- 
    if (idPresent) {
      // If Product already added then update the number of cartItems
      await updateDoc(userDocRef, { cartDetails: updatedArray });
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

async function getCartValueFromDBFunction(asin, email) {

}

export const { increament_decreament_func, fetchData, updateInput, addToCart, getCartValueFromDB, getCartArray } = CartSlice.actions;
export default CartSlice.reducer;
