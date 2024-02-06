import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firebase from "../../Firebase/Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
// import { auth } from "../../Firebase/Firebase";
import { db } from "../../Firebase/Firebase";

const initialState = {
  currentUser: {},
};

const auth = getAuth();

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signUpFunction.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signUpFunction.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        if (Object.keys(action.payload).length != 0) {
          state.currentUser = action.payload;
          localStorage.setItem("currentUser", JSON.stringify(action.payload));

          if (getDataFromDataBase("USER", action.payload.email)) {
          } else if (Object.keys(action.payload).length > 0) {
            setDoc(doc(db, "USER", action.payload.email), {
              ...action.payload,
            });
            console.log("set");
          }
        }
      })
      .addCase(signUpFunction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.currentUser = {};
      });
  },
});

export const signUpFunction = createAsyncThunk(
  "auth/authenticate",
  async (data) => {
    // console.log("called", data);
    let userCredential;
    try {
      if (data.action == "SIGNUP") {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.pass
        );
      } else if (data.action == "LOGIN") {
        userCredential = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.pass
        );
      } else if (data.action == "LOGOUT") {
        console.log("Logginout");
        signOut(auth);
        return {};
      }
      console.log(userCredential);
      return userCredential.user.providerData[0];
    } catch (error) {
      console.log(error);
    }
  }
);

async function getDataFromDataBase(user, email) {
  const docRef = doc(db, user, email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return true;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return false;
  }
}

export const { currentUser } = AuthSlice.actions;
export default AuthSlice.reducer;
