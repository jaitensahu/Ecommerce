import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const productAPIKey = import.meta.env.MODE === 'production' ? process.env.AMAZON_KEY: import.meta.env.VITE_SOME_KEY;

const initialState = {
    categories: {},
    isLoading: true,
    allProductsOfCategory: [],
    originalDataArr:[],
    isProductCategoryLoading: true,
};

export const FetchDataSlice = createSlice({
    name: "Fetch_And_Update_States",
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            console.log(productAPIKey);

            // console.log(action.payload);
            if(action.payload.state == "ISLOADING"){
                state.isLoading = action.payload.Load
            }
            if(action.payload.state == "ISCATEGORYLOADING"){
                state.isProductCategoryLoading = action.payload.Load;
            }
            
        },
        setAllProduct: (state, action)=>{
            // console.log(action.payload);
            state.allProductsOfCategory = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
            if (action.meta.arg.List == "CATEGORYLIST")
                state.categories = action.payload;
            if (action.meta.arg.List == "ALLPRODUCTS_OF_CATEGORY")
                state.allProductsOfCategory = action.payload;
                state.originalDataArr = action.payload;
        })
    }

});


export const fetchCategoriesThunk = createAsyncThunk(
    'Fetch_And_Update_States/fetchCategories',
    async (arg, { refectWithValue }) => {
        // console.log(arg);
        try {
            console.log("fetching");
            let response = await axios.get(
                `https://api.asindataapi.com/request?api_key=${productAPIKey}&type=category&category_id=${arg.id}&amazon_domain=amazon.in`);
            // `https://api.asindataapi.com/request?api_key=8B53697F724B4044B632ABBE85E48FBD&type=category&category_id=5122348031&amazon_domain=amazon.in`
            // console.log(response.data.category_results);
            if(arg.List == "CATEGORYLIST"){
                return response.data["refinements"].departments
            }else{
                return response.data.category_results
            }
           
        } catch (error) {
            return refectWithValue(error, response.data)
        }
    }

);
export const { setIsLoading, setAllProduct } = FetchDataSlice.actions;
export default FetchDataSlice.reducer

//   fetchCategories();